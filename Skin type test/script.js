const questions = [
    {
        question: "1. How does your skin feel when you wake up in the morning?",
        options: [
            "Tight and dry",
            "Oily or greasy",
            "Oily in some areas and dry in others",
            "Balanced and normal"
        ]
    },
    {
        question: "2. How does your skin react to sun exposure?",
        options: [
            "Burns easily and gets red",
            "Gets oily and shiny quickly",
            "A mix of dryness and oiliness depending on the area",
            "Stays normal without significant change"
        ]
    },
    {
        question: "3. How often do you need to apply moisturizer throughout the day?",
        options: [
            "Multiple times to prevent dryness",
            "Rarely, my skin stays oily",
            "Only in certain areas like cheeks, while other parts stay oily",
            "Once in the morning is enough"
        ]
    },
    {
        question: "4. How does your skin feel after washing your face with a cleanser?",
        options: [
            "Feels dry, flaky, or tight",
            "Feels greasy or oily within a few hours",
            "Feels dry in some areas and oily in others",
            "Feels refreshed and balanced"
        ]
    },
    {
        question: "5. How often do you experience breakouts or acne?",
        options: [
            "Rarely, if ever",
            "Frequently due to oily skin",
            "Only in the T-zone (forehead, nose, chin)",
            "I rarely have breakouts"
        ]
    },
    {
        question: "6. How does your skin feel at the end of the day?",
        options: [
            "Feels very dry or tight",
            "Feels oily or shiny",
            "Oily in some areas and dry in others",
            "Feels normal, no significant changes"
        ]
    },
    {
        question: "7. How often do you need to blot or powder your face to control oil?",
        options: [
            "Never, my skin doesn’t get oily",
            "Several times a day",
            "Only on my forehead, nose, or chin",
            "Rarely"
        ]
    },
    {
        question: "8. How does your skin react to new skincare products?",
        options: [
            "Feels drier or flaky",
            "Becomes more oily or shiny",
            "Feels different in different areas",
            "Adapts well and stays normal"
        ]
    },
    {
        question: "9. How does your skin feel in cold or dry weather?",
        options: [
            "Becomes very dry and tight",
            "Remains oily or shiny",
            "Becomes dry in some areas and oily in others",
            "Feels normal with no major changes"
        ]
    },
    {
        question: "10. Do you consider your skin to be sensitive?",
        options: [
            "Yes, I have sensitive skin",
            "No, my skin is not sensitive"
        ]
    },
    {
        question: "11. How does your skin react to harsh weather conditions (e.g., wind, sun, extreme temperatures)?",
        options: [
            "Gets irritated or red",
            "Feels fine, no reaction",
            "Becomes oily or shiny",
            "Dries out significantly"
        ]
    },
    {
        question: "12. Do you notice irritation or redness after using certain products?",
        options: [
            "Yes, often",
            "Rarely",
            "Only with specific ingredients",
            "No, never"
        ]
    },
    {
        question: "13. Does your skin react strongly to certain foods or drinks?",
        options: [
            "Yes, I notice breakouts or irritation",
            "No, it doesn't react",
            "Sometimes, depending on the food",
            "I’m not sure"
        ]
    }
];

let currentQuestion = 0;
const answers = [];

document.getElementById('nextButton').addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);
    if (selectedOption) {
        answers[currentQuestion] = selectedOption.value;
        currentQuestion++;

        // Check if it's the last question
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            // Hide question container and show results
            document.getElementById('questionContainer').style.display = 'none';
            displayResult();
            // Close the window after a short delay
            setTimeout(() => window.close(), 5000); // Change the time as needed
        }
    } else {
        alert('Please select an option before proceeding.');
    }
});

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const nextButton = document.getElementById('nextButton');
    questionContainer.innerHTML = '';

    const questionData = questions[currentQuestion];
    const questionHTML = `<p>${questionData.question}</p>`;
    questionContainer.innerHTML = questionHTML;

    questionData.options.forEach((option) => {
        questionContainer.innerHTML += `
            <label>
                <input type="radio" name="q${currentQuestion + 1}" value="${option}">
                ${option}
            </label>
        `;
    });

    // Update button text based on current question
    nextButton.textContent = currentQuestion === questions.length - 1 ? 'Finish' : 'Next';
}

function displayResult() {
    const skinTypes = {
        "Dry": answers.some(ans => ans.includes("dry")),
        "Oily": answers.some(ans => ans.includes("oily")),
        "Combination": answers.some(ans => ans.includes("Oily in some areas and dry in others")),
        "Normal": answers.some(ans => ans.includes("normal")),
        "Sensitive": answers[answers.length - 1] === "Yes, I have sensitive skin" || answers.some(ans => ans.includes("irritated") || ans.includes("red"))
    };

    const selectedSkinTypes = Object.keys(skinTypes).filter(type => skinTypes[type]);

    let result = 'Your skin type is: ';
    
    if (selectedSkinTypes.includes("Sensitive")) {
        result += 'Sensitive ';
        if (selectedSkinTypes.length > 1) {
            result += 'with a primary skin type of ';
            if (skinTypes["Oily"]) {
                result += "Oily.";
            } else if (skinTypes["Combination"]) {
                result += "Combination.";
            } else if (skinTypes["Dry"]) {
                result += "Dry.";
            } else {
                result += "Normal.";
            }
        } else {
            result += 'Sensitive.';
        }
    } else {
        // If not sensitive, just display the main skin type
        if (skinTypes["Oily"]) {
            result += "Oily.";
        } else if (skinTypes["Combination"]) {
            result += "Combination.";
        } else if (skinTypes["Dry"]) {
            result += "Dry.";
        } else {
            result += "Normal.";
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('resultContainer').style.display = 'block'; // Show results
}


// Display the first question
displayQuestion();
