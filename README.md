# Registration Form 📝

The Registration Form Web App is a user registration application that ensures proper input before submission. This README file provides an overview of the project's structure, functionality, and usage instructions.

You can access the repository for this project on GitHub: [Registration Form Repository](https://github.com/AKwiecinska/registration-form)

## Features 📋

- Real-time validation for username, password, password confirmation, and email.
- Feedback on errors to assist users in correcting their input.
- User interface using Google Fonts and custom CSS.

## Technologies Used 🛠️

- HTML: The structure of the interface.
- CSS: Styling and layout of the elements.
- JavaScript: Logic and interactivity.
- Google Fonts for typography.

## JavaScript Code Overview

### Selecting DOM Elements

```
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const clearBtn = document.querySelector(".clear");
const sendBtn = document.querySelector(".send");
const popup = document.querySelector(".popup");
const eyeIcon = document.getElementById("eye-icon");
```

These lines of code use the **document.getElementById()** and **document.querySelector()** methods to select HTML elements by their IDs or classes. These elements are essential for interacting with user input and displaying messages.

### Error Handling Functions

```
const showError = (input, msg) => {
  // ...
};

const clearError = (input) => {
  // ...
};
```

The showError function adds an error message and a visual indication to the specified input field. The clearError function removes the error message and visual indication once the error is resolved.

### Form Validation Functions

```
const checkForm = (input) => {
  // ...
};

const checkLength = (input, min) => {
  // ...
};

const checkEmail = (email) => {
  // ...
};
```

- **checkForm** iterates through an array of input fields, checks if they are empty, and displays error messages if necessary.
- **checkLength** ensures that an input's length meets a specified minimum requirement and displays an error message if not.
- **checkEmail** uses a regular expression to validate the format of the email input and displays an error if it's incorrect.

You can see the Form Validation in action by clicking here:
[Registration Form](https://akwiecinska.github.io/registration-form/)
