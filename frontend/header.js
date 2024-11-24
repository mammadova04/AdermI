document.addEventListener("DOMContentLoaded", () => {
    // Обновляем кнопки хедера
    updateHeaderButtons();

    // Логика выхода из аккаунта
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", (e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке
            localStorage.removeItem("username"); // Удаляем имя пользователя
            alert("You have been logged out."); // Уведомление
            updateHeaderButtons(); // Обновляем кнопки хедера
        });
    }
});

// Функция для обновления кнопок хедера
function updateHeaderButtons() {
    const username = localStorage.getItem("username"); // Получаем имя пользователя

    const loginNavItem = document.getElementById("loginNavItem");
    const signupNavItem = document.getElementById("signupNavItem");
    const usernameNavItem = document.getElementById("usernameNavItem");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if (username) {
        // Пользователь авторизован
        loginNavItem.style.display = "none";
        signupNavItem.style.display = "none";
        usernameNavItem.style.display = "inline-block";
        usernameDisplay.textContent = username;
    } else {
        // Пользователь не авторизован
        loginNavItem.style.display = "inline-block";
        signupNavItem.style.display = "inline-block";
        usernameNavItem.style.display = "none";
    }
}
