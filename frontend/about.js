document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('loginButton').addEventListener('click', function () {
        window.location.href = 'register.html';
    });

    document.getElementById('signupButton').addEventListener('click', function () {
        window.location.href = 'register.html';
    });


    const images = document.querySelectorAll('img');
    for (const img of images) {
        const src = img.getAttribute('src');
        const imgElement = new Image();
        imgElement.src = src;
    }

    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.querySelector('h3').innerText;
            const bio = member.querySelector('p').innerText;
            alert(`More about ${name}: ${bio}`);
        });
    });
});
