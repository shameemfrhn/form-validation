// script.js
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Validate name (required and at least 3 characters)
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters";
        isValid = false;
    }

    // Validate email (required and valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address";
        isValid = false;
    }

    // Validate password (required and at least 6 characters)
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    return isValid;
}
