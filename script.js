
// Get HTML elements
const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const successMessage = document.getElementById("successMessage");
const warningMessage = document.getElementById("warningMessage");
const errorMessage = document.getElementById("errorMessage");

// Handle Login Form Submission
loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const user = username.value.trim();
    const pass = password.value.trim();

    // Hide all messages
    successMessage.hidden = true;
    warningMessage.hidden = true;
    errorMessage.hidden = true;

    // Both fields are empty
    if (user === "" && pass === "") {

        errorMessage.hidden = false;

    }

    // One field is empty
    else if (user === "" || pass === "") {

        warningMessage.hidden = false;

    }

    // Both fields contain values
    else {

        successMessage.hidden = false;

    }

});

