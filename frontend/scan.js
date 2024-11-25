document.getElementById('uploadButton').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  fetch('http://ai.shamilabilov.live/predict', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json', // Expect JSON response from the server
      },
  })
      .then(res => {
          if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json(); // Parse JSON response
      })
      .then(data => {
          displayResponse(data); // Call function to display response
      })
      .catch(error => console.error('Fetch Error:', error));
});

function displayResponse(response) {
  const diseaseName = response.predicted_class.charAt(0).toUpperCase() + response.predicted_class.slice(1); // Capitalize first letter

  // Map diseases to questions
  const diseaseQuestions = {
      "Acne": [
          "Have you experienced frequent breakouts or pimples, particularly during certain times in your life, such as puberty or pregnancy?",
          "Do you often use skincare or cosmetic products that may clog pores, such as heavy moisturizers or makeup?",
          "Have you noticed any relationship between stress or diet and your skin condition, such as flare-ups after stressful events or consumption of certain foods?",
          "Do you have oily skin or a tendency for your face to feel greasy, particularly in the T-zone area (forehead, nose, chin)?"
      ],
      "Atopic Dermatitis": [
          "Do you have a history of eczema or other allergic conditions, such as asthma or hay fever?",
          "Have you noticed dry, itchy patches of skin that worsen during colder months or after long periods of exposure to irritants?",
          "Do you have a family history of atopic dermatitis or other skin conditions?",
          "Have you experienced any flare-ups triggered by stress, temperature changes, or certain substances like soaps or detergents?"
      ],
      "Basal Cell Carcinoma": [
          "Have you had frequent sun exposure, especially during childhood or through activities like outdoor sports or tanning beds?",
          "Do you use sunscreen regularly, or have you noticed that your skin burns easily after sun exposure?",
          "Have you had a history of significant or repeated sunburns, especially in early life?",
          "Do you have a family history of skin cancer or basal cell carcinoma?"
      ],
      "Melanoma": [
          "Do you have a family history of melanoma or other forms of skin cancer?",
          "Have you been diagnosed with any conditions that affect your immune system, such as HIV/AIDS or treatments like chemotherapy?",
          "Do you often find yourself exposed to the sun without protection, especially during peak hours?",
          "Have you noticed any moles or growths that have changed over time, even if they don't appear unusual at first glance?"
      ]
  };

  // Show questions for the predicted disease
  const questions = diseaseQuestions[diseaseName] || [];
  if (questions.length > 0) {
      document.getElementById('responseCard').style.display = 'block';
      askQuestion(questions, 0, 0, diseaseName); // Pass disease name to the question function
  } else {
      alert("No questions available for this disease.");
  }
}

let currentQuestionIndex = 0;
let yesCount = 0;

function askQuestion(questions, index, yesCount, diseaseName) {
  if (index < questions.length) {
      const question = questions[index];
      const questionContainer = document.getElementById('questionsContainer');
      questionContainer.innerHTML = `
          <div>
              <p>${question}</p>
              <label>
                  <input type="radio" name="question${index}" value="yes"> Yes
              </label>
              <label>
                  <input type="radio" name="question${index}" value="no"> No
              </label>
          </div>
          <button id="nextButton">Next</button>
      `;

      document.getElementById('nextButton').addEventListener('click', () => {
          const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
          if (selectedAnswer) {
              if (selectedAnswer.value === "yes") {
                  yesCount++;
              }

              currentQuestionIndex++; // Move to the next question
              askQuestion(questions, currentQuestionIndex, yesCount, diseaseName); // Ask the next question
          } else {
              alert("Please select an answer before moving to the next question.");
          }
      });
  } else {
      // Final Result after all questions are answered
      setTimeout(() => {
          showFinalResult(diseaseName, yesCount);
      }, 500); // Delay to allow for any remaining DOM updates
  }
}

function showFinalResult(diseaseName, yesCount) {
  const resultContainer = document.getElementById('questionsContainer');
  
  // Clear previous content in the result container
  resultContainer.innerHTML = '';
  
  // Determine the final message based on the count of "Yes" answers
  let finalMessage = '';
  if (yesCount < 2) {
      finalMessage = 'Unfortunately, we cannot determine the disease yet.';
  } else {
      finalMessage = `It looks like ${diseaseName}. Please contact a professional or get some advice from a chatbot.`;
  }

  // Display the final message
  const finalMessageContainer = document.createElement('p');
  finalMessageContainer.textContent = finalMessage;
  resultContainer.appendChild(finalMessageContainer);
}
