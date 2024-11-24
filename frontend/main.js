document.addEventListener('DOMContentLoaded', function () {
    const loginNavItem = document.getElementById('loginNavItem');
    const signupNavItem = document.getElementById('signupNavItem');
    const usernameNavItem = document.getElementById('usernameNavItem');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const ctaSection = document.querySelector('.cta-section');
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
    
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
    

    // Check if user is logged in (using local storage to simulate a logged-in state)
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
        showLoggedInState(loggedInUser);
    }

    function showLoggedInState(username) {
        loginNavItem.style.display = 'none'; // Hide Log In button
        signupNavItem.style.display = 'none'; // Hide Sign Up button
        usernameNavItem.style.display = 'block'; // Show the username
        usernameDisplay.textContent = username; // Display the username
        ctaSection.style.display = 'none'; // Hide the CTA section (buttons below the main section)
    }

    document.getElementById('takeTestButton').addEventListener('click', function () {
        alert('Redirecting to the skin test.');
        window.location.href = 'skin.html';
    });

    document.getElementById('uploadPhotoButton').addEventListener('click', function () {
        document.getElementById('photoInput').click();
    });

    document.getElementById('photoInput').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(file);
                const previewImage = document.getElementById('previewImage');
                previewImage.src = imageUrl;
                previewImage.style.display = 'block';
            } else {
                alert('Please select a valid image file.');
            }
        }
    });

    document.getElementById('startChatButton').addEventListener('click', function () {
        const chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = 'block';
        document.getElementById('chatInput').focus();
    });

    document.getElementById('sendMessageButton').addEventListener('click', function () {
        sendMessage();
    });

    document.getElementById('chatInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        const chatOutput = document.getElementById('chatOutput');
        chatOutput.innerHTML += `<div class="user-message"><strong>You:</strong> ${userMessage}</div>`;
        chatInput.value = '';

        setTimeout(() => {
            getAIResponse(userMessage);
        }, 1000);
    }

    function getAIResponse(userMessage) {
        const chatOutput = document.getElementById('chatOutput');

        const aiResponse = generateAIResponse(userMessage);  // Replace with API call

        chatOutput.innerHTML += `<div class="ai-message"><strong>Aderml AI:</strong> ${aiResponse}</div>`;
        chatOutput.scrollTop = chatOutput.scrollHeight;  // Scroll to bottom
    }

    // Example function to simulate AI response, replace this with your API call
    function generateAIResponse(message) {
        return "This is a simulated AI response to: " + message;
    }
});
