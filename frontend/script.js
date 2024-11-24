// Смена форм между "Sign Up" и "Sign In"
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Логика для формы Sign Up
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Останавливаем отправку формы

    // Получаем значения из полей формы
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('username', name);

        // Уведомляем пользователя
        alert(`Sign Up Successful! Welcome, ${name}`);

        // Перенаправляем пользователя на главную страницу
        window.location.href = "main.html"; // Убедитесь, что main.html существует
    } else {
        alert('Please fill in all fields.'); // Показываем сообщение, если поля пустые
    }
});

// Логика для формы Sign In
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Останавливаем отправку формы

    // Получаем значения из полей формы
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (email && password) {
        // Для примера, создадим имя пользователя из email
        const fakeUsername = email.split('@')[0];

        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('username', fakeUsername);

        // Уведомляем пользователя
        alert(`Sign In Successful! Welcome back, ${fakeUsername}`);

        // Перенаправляем пользователя на главную страницу
        window.location.href = "main.html"; // Убедитесь, что main.html существует
    } else {
        alert('Please fill in both fields.'); // Показываем сообщение, если поля пустые
    }
});
