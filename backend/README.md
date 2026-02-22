## ⚙️ Backend Documentation

The backend section is designed as an independent, stateless REST API responsible for business logic, user authentication, and database communication. Decoupling the backend from the frontend allows for easier scaling and opens the door to integrating a mobile application in the future.

### 🛠 Technologies & Architecture
* **PHP & Laravel:** The core technologies powering the server logic. Built-in routing, controllers, and middleware mechanisms are used to elegantly manage HTTP requests.
* **MySQL:** A relational database storing information about users, job offers, and applications. The database structure is managed through Migrations and populated with dummy data using Laravel's Seeders and Factories.
* **JWT (JSON Web Tokens):** The API authentication mechanism. Upon successful login, the server generates a JWT, which is required to access protected resources (e.g., adding new job offers, editing profiles). A dedicated middleware handles this by validating the token present in the `Authorization` header.
* **Architecture:** The project follows the MVC (Model-View-Controller) pattern in an API context, where the "views" are JSON responses. Form Requests are also utilized to validate incoming data before it reaches the controller, improving security and code readability.

