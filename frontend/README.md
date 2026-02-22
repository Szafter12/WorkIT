## 🎨 Frontend Documentation

The frontend handles the user interface, routing, and token management to ensure a smooth, page-reload-free experience.

### Routing Structure
React Router handles the application's view rendering. The primary dynamic routing map includes:
* `/` - **Home / Job Board:** Displays the main feed of available IT job offers.
* `/login` - **Login View:** Authentication form to exchange credentials for a JWT token.
* `/register` - **Registration View:** Form to create a new user account.
* `/posts/:id` - **Dynamic Job Details:** Fetches and displays full information about a specific job posting based on the URL parameter.
* `/praca` - **Dynamic Job Details:** Fetches and displays full information about a specific job posting based on the URL parameter.
* `/profile` - **Protected Route:** User dashboard to manage applications or profile details. Users are redirected to `/login` if no valid JWT is found.

### Authentication Flow
1. The user submits their credentials via the login form.
2. The frontend receives the JWT from the backend API and stores it securely.
3. The token is attached as a `Bearer` token to the `Authorization` header of all subsequent protected API requests (typically using an Axios interceptor or customized Fetch API).

### UI & Theming
The application's styling utilizes CSS variables to maintain a consistent design system, making global theme changes simple. The core palette is structured as follows:
```css
:root {
  --main-color: #4855c6;
  --secondary-color: #3745c2;
  --white-color: #ffffff;
  --text-color: #202557;
  --accent-color: #ffe481;
  --bgc-color: #fefefe;
}
