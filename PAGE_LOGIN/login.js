// Toggle password visibility
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
// Đăng nhập vào
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password match
    if (email === 'ngothanhtien1406@gmail.com' && password === '14062004') {
        alert('đăng nhập thành công');
        window.location.href = "/PAGE_HOME/home.html";
    } else {
        alert('Email hoặc mật khẩu không chính xác');
    }
});