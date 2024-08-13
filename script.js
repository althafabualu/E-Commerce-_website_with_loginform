document.addEventListener("DOMContentLoaded", () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const signUpEmail = document.getElementById('signUpEmail');
    const signInEmail = document.getElementById('signInEmail');
    const signUpPassword = document.getElementById('signUpPassword');
    const signInPassword = document.getElementById('signInPassword');
    const signUpError = document.getElementById('signUpError');
    const signInError = document.getElementById('signInError');

    signUpButton.addEventListener('click', () => {
        container.classList.add("active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle sign-up form submission
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = signUpEmail.value;
        const password = signUpPassword.value;

        if (!validateEmail(email)) {
            signUpError.textContent = "Please enter a valid email address.";
        } else {
            signUpError.textContent = "";

            // Here you would normally send the data to the server for account creation
            // For demonstration, we'll assume the sign-up is always successful.
            alert("Account created successfully!");

            // Redirect to the product page
            window.location.href = "product.html";
        }
    });

    // Handle sign-in form submission
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = signInEmail.value;
        const password = signInPassword.value;

        if (!validateEmail(email)) {
            signInError.textContent = "Please enter a valid email address.";
        } else {
            signInError.textContent = "";

            // Simulate a server-side check for correct email and password
            if (email === "user@example.com" && password === "password123") {
                alert(`Login successful! Your password is: ${password}`);

                // Redirect to the product page
                window.location.href = "product.html";
            } else {
                signInError.textContent = "Incorrect email or password.";
            }
        }
    });
});
