# User Authentication System

This project includes a user authentication system with sign-up and login functionalities. It utilizes React for the front-end and integrates with an external API for user registration and login.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Components](#components)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Running the Project](#running-the-project)

## Project Overview

This project provides a basic implementation of user authentication. It consists of two main components:

- **SignUp**: A form to register new users.
- **Login**: A form for users to log in.

## Features

- **Sign-Up Form**: Collects user details like name, email, password, phone number, etc.
- **Login Form**: Allows users to log in with their email and password.
- **Responsive Design**: Adapts to various screen sizes, including tablets and mobile devices.
- **Error Handling**: Displays error messages if registration or login fails.

## Setup and Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ````Make sure you have Node.js installed. Then, install the project dependencies:
            "npm install"
   3.**Environment Configuration**

    ```Ensure your .env file (if applicable) is configured with the correct API endpoints.
   ````

4.**Start the Development Server**
"npm start"
This will start the development server and open the application in your default browser.

**Components**

"SignUp"
File: src/components/SignUp.jsx
Description: Allows users to register by entering their details. Includes form validation and error handling.

"Login"
File: src/components/Login.jsx
Description: Allows users to log in using their email and password. Handles authentication and navigates to the dashboard upon successful login.
Styling

"SignUp CSS"
File: src/components/SignUp.css
Description: Styles for the sign-up form, including responsive design adjustments.

"Login CSS"
File: src/components/Login.css
Description: Styles for the login form, ensuring it is responsive and visually appealing across different devices.

API Integration
SignUp API Endpoint: https://syoft.dev/Api/user_registeration/api/user_registeration
Login API Endpoint: https://syoft.dev/Api/userlogin/api/userlogin
Ensure these endpoints are accessible and properly configured in your environment.

Running the Project
To run the project in development mode:
"npm start"

Visit http://localhost:3000 in your browser to view the application.

Contributing
Contributions are welcome! Please submit a pull request or open an issue for any bugs or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

For any questions or support, please contact dineshbathula333@gmail.com.
