## ⚙️ Backend Documentation

The backend section is designed as an independent, stateless REST API responsible for business logic, user authentication, and database communication. Decoupling the backend from the frontend allows for easier scaling and opens the door to integrating a mobile application in the future.

### 🛠 Technologies & Architecture
* **PHP & Laravel:** The core technologies powering the server logic. Built-in routing, controllers, and middleware mechanisms are used to elegantly manage HTTP requests.
* **MySQL:** A relational database storing information about users, job offers, and applications. The database structure is managed through Migrations and populated with dummy data using Laravel's Seeders and Factories.
* **JWT (JSON Web Tokens):** The API authentication mechanism. Upon successful login, the server generates a JWT, which is required to access protected resources (e.g., adding new job offers, editing profiles). A dedicated middleware handles this by validating the token present in the `Authorization` header.
* **Architecture:** The project follows the MVC (Model-View-Controller) pattern in an API context, where the "views" are JSON responses. Form Requests are also utilized to validate incoming data before it reaches the controller, improving security and code readability.

### 🧪 Testing (Backend)
To ensure API stability and reliability, automated tests using **PHPUnit** are planned and implemented.
* **Unit Tests:** Focus on isolated pieces of business logic, such as data formatting, calculations, or specific model validations.
* **Feature/Integration Tests:** Simulate full HTTP requests to the API endpoints. They verify, among other things:
  * Whether the `/api/jobs` endpoint correctly returns a list of offers with a `200 OK` status.
  * If attempting to access a protected endpoint without a JWT results in a `401 Unauthorized` error.
  * The correctness of the registration and login processes (including generating a valid token).
  * Creating, editing, and deleting resources by authorized users.
