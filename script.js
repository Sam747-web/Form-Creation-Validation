document.addEventListener("DOMContentLoaded", function () {
    // Selecting the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true; // Track validation status
        let messages = []; // Store error messages

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: must contain '@' and '.'
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Enter a valid email address.");
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback message
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    });
});
