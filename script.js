// Handle the toggle between sign-in and sign-up
const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');
const container = document.querySelector('.container');

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handle form submission for registration
document.getElementById('signUpSubmit').addEventListener('click', function () {
    const name = document.getElementById('signUpName').value;
    const contact = document.getElementById('signUpContact').value;
    const password = document.getElementById('signUpPassword').value;
    const rePassword = document.getElementById('signUpRePassword').value;
    const errorDiv = document.getElementById('signUpError');

    errorDiv.textContent = '';

    if (password !== rePassword) {
        errorDiv.textContent = 'Passwords do not match.';
        return;
    }

    if (name && contact && password) {
        // Save user details in localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.contact === contact);

        if (existingUser) {
            errorDiv.textContent = 'User already exists with this contact.';
            return;
        }

        users.push({ name, contact, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        // Optionally, redirect to a different page after registration
        // window.location.href = 'product.html';
    } else {
        errorDiv.textContent = 'Please fill in all fields.';
    }
});

// Handle form submission for sign-in
document.getElementById('signInSubmit').addEventListener('click', function () {
    const contact = document.getElementById('signInContact').value;
    const password = document.getElementById('signInPassword').value;
    const errorDiv = document.getElementById('signInError');

    errorDiv.textContent = '';

    if (contact && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.contact === contact && user.password === password);

        if (user) {
            alert('Sign in successful!');
            window.location.href = 'product.html';
        } else {
            errorDiv.textContent = 'Incorrect email or password.';
        }
    } else {
        errorDiv.textContent = 'Please fill in all fields.';
    }
});
