const showPassword = document.querySelector('.show-password');
const passwordInput = document.querySelector('input[type="password"]');

showPassword.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        showPassword.textContent = "👁️";
    }
});