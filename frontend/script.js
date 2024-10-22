const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        alert(`Sign Up Successful!\nName: ${name}\nEmail: ${email}`);
        container.classList.remove('active');  // Automatically switch to the Sign In form
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (email && password) {
        alert(`Sign In Successful!\nEmail: ${email}`);
    } else {
        alert('Please fill in both fields.');
    }
});
