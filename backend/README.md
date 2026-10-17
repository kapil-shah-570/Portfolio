# Portfolio API

This Express API provides list, detail, create, update, and delete operations for portfolio content. Each resource has its own model and route module; shared validation and CRUD behavior live in `src/models/mongoCollectionModel.js`, `src/controllers/createCollectionController.js`, and `src/routes/createCollectionRoutes.js`.

## Start

```sh
cp .env.example .env
```

Set `ADMIN_EMAIL` to the admin's email address, `ADMIN_PASSWORD` to a long private password, and `ADMIN_SESSION_SECRET` to a random secret (generate it with `openssl rand -hex 32`), then run:

```sh
npm install
npm run dev
```

The API listens on port `5000` by default. Set `FRONTEND_URL`, `ADMIN_URL`, and `BACKEND_URL` in each app's environment file so all three apps use the same URLs. The backend allows requests from `FRONTEND_URL` and `ADMIN_URL`; `CORS_ORIGINS` can list any additional exact browser origins. Keep all admin credentials in the backend `.env`; never place them in `admin/.env.local` or a `NEXT_PUBLIC_*` variable. Admin login creates a signed HTTP-only cookie with a 12-hour expiry. Password changes and signing-secret rotation invalidate existing sessions.

## Connect the deployed apps

Set `BACKEND_URL` and both apps' `NEXT_PUBLIC_API_URL` to the backend URL; also set `frontend/API_URL` to the URL reachable by the frontend server. Set `FRONTEND_URL` to the public site URL and `ADMIN_URL` to the admin URL in each environment file. These must be the exact origins (scheme and host, without paths or trailing slashes). The backend uses `FRONTEND_URL` and `ADMIN_URL` for CORS; add any extra origins to `CORS_ORIGINS`.

The admin session cookie defaults to `ADMIN_COOKIE_SAME_SITE=strict`, which works when the admin app and API share a site, such as sibling subdomains. For apps on different sites, set `ADMIN_COOKIE_SAME_SITE=none` and serve them over HTTPS; some browsers may block cross-site cookies, so sibling subdomains are preferred. Keep `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `MONGODB_URI`, and mail credentials only in the backend hosting provider's secret environment settings. Never put secrets in either Next.js app or in `NEXT_PUBLIC_*` variables.

## MongoDB and contact email

Set `MONGODB_URI` to your MongoDB Atlas connection string and `MONGODB_DATABASE` to the database name. The backend will not start without a successful database connection. In Atlas, create a database user and allow the backend host through Network Access; URL-encode special characters in the username or password in the connection string.

All six portfolio collections and contact messages are stored in MongoDB. On startup, if a portfolio collection is empty, existing records in `backend/data/*.json` are imported when a legacy data file exists. Otherwise, the collection remains empty until records are created through the admin app.

Contact form messages (name, email, subject, message, email-notification status, and timestamps) are stored in the `contactmessages` collection before an email notification is attempted. To receive notifications, configure `MAIL_USER` with the Gmail mailbox, `MAIL_PASSWORD` with a Gmail App Password (not the mailbox login password), and `CONTACT_EMAIL` with the inbox that should receive submissions. The SMTP password remains in the backend `.env`. `MAIL_HOST` and `MAIL_PORT` default to Gmail SMTP on port 465. If mail settings are missing or email delivery fails, the message remains saved in MongoDB and the contact form reports that email notification was unavailable.

The public contact form posts to `POST /api/messages`. It returns the email notification state (`sent`, `not_configured`, or `failed`) along with the saved-message confirmation. After signing in, admins can view all submissions at `GET /api/messages`, download an Excel-compatible CSV at `GET /api/messages/export.csv`, and delete a submission with `DELETE /api/messages/:id`. These inbox endpoints require the signed admin session cookie.

## Collections and endpoints

All routes are prefixed with `/api`:

| Resource | Collection endpoint | Required fields | Slug source |
| --- | --- | --- | --- |
| Blogs | `/api/blogs` | `title`, `excerpt`, `date` | `title` |
| Certificates | `/api/certificates` | `title`, `issuer`, `date` | `title` |
| Skills | `/api/skills` | `name`, `category`, `level` | `name` |
| Projects | `/api/projects` | `title`, `description` | `title` |
| Experience | `/api/experiences` | `title`, `company`, `startDate`, `type` | `title` |
| Education | `/api/educations` | `degree`, `institution`, `startDate` | `degree` |

`POST /api/admin/login` accepts `{ "email": "...", "password": "..." }` and sets the HTTP-only session cookie. `GET /api/admin/session` checks the session; `POST /api/admin/logout` clears it. `GET /api/<collection>` lists records and `GET /api/<collection>/:id` fetches one by its `_id`. `POST /api/<collection>`, `PUT /api/<collection>/:id`, and `DELETE /api/<collection>/:id` require the signed admin session cookie. The slug can be provided in a write body or generated from the resource title. Slugs must be unique within a collection.

The admin app and public portfolio use these API collections when the API is available. If the public app cannot reach the API, it logs the failure and uses empty lists for collection content rather than showing example records.
