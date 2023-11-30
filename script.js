document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const imageContainer = document.getElementById('imageContainer');
    const createAccountButton = document.getElementById('createAccountButton');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Hardcoded username and password check
        if (username === 'username' && password === 'password') {
            loginForm.style.display = 'none';
            imageContainer.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    createAccountButton.addEventListener('click', function() {
        // Implement create account functionality if needed
        alert('Create Account button clicked');
    });

    forgotPasswordLink.addEventListener('click', function() {
        // Implement forgot password functionality if needed
        alert('Forgot Password link clicked');
    });
});
