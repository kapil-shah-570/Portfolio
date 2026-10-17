# Portfolio Admin

The admin app manages blogs, certificates, skills, projects, work experience, and education entries through the Express API in `../backend`.

## Start locally

1. In `backend`, copy `.env.example` to `.env` and set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET`. Use the Gmail address you want to sign in with, choose a long private password, and generate the session secret with `openssl rand -hex 32`.
2. Start the API:

   ```sh
   cd backend
   npm run dev
   ```

3. In `admin`, copy `.env.example` to `.env.local` if the API or portfolio uses a different address, then start the admin app:

   ```sh
   cd admin
   npm run dev -- --port 3001
   ```

4. Open the admin app, sign in with the configured email and password, and choose a collection.

The email and password are checked only by the backend; do not put them in `admin/.env.local` or a `NEXT_PUBLIC_*` variable. After sign-in, the API issues a signed, HTTP-only session cookie that expires after 12 hours. The password is not kept in browser storage. Sign out to clear the cookie.

For deployment, keep `FRONTEND_URL`, `ADMIN_URL`, and `BACKEND_URL` consistent in each app's environment settings. Set `NEXT_PUBLIC_API_URL` to the browser-accessible HTTPS backend URL and `NEXT_PUBLIC_SITE_URL` to the public portfolio URL before building the admin app. The backend uses `FRONTEND_URL` and `ADMIN_URL` to allow the two app origins. If the admin app and API share a site (for example, sibling subdomains), keep `ADMIN_COOKIE_SAME_SITE=strict`; if they are on different sites, set it to `none` and use HTTPS for both. Cross-site cookies may still be restricted by some browsers, so using sibling subdomains is preferred.

## Managing content

Every collection has a list, create, and edit screen. The slug field is suggested from the title (or name/degree), can be edited, and is checked for uniqueness by the API. List fields accept comma-separated values. New blog posts are published by default and can be saved as drafts by turning off **Published**. When editing, clearing an optional field removes its old value. Changes are stored in MongoDB and the public site reads the current collection data from the API.

For API routes, data format, environment setup, and storage details, see [`../backend/README.md`](../backend/README.md).
