from flask import Flask, request, render_template, redirect, url_for, flash
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)

# Path to your trained model (update this with the correct file path)
model_path = 'skin_disease_classifier_cnn_v3.keras'

# Load the model
try:
    model = tf.keras.models.load_model(model_path)
    print("Model loaded successfully.")
except OSError as e:
    print(f"Error opening .keras file or loading model: {e}")
    model = None  # Ensure model is None if loading fails

# Class labels
class_labels = ['Acne', 'Atopic Dermatitis', 'Basal Cell Carcinoma', 'Melanoma']

# Preprocessing function for the custom image
def preprocess_image(img_path, target_size=(224, 224)):
    img = image.load_img(img_path, target_size=target_size)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

# Function to make prediction
def predict_skin_disease(img_path):
    if model is None:
        return "Model not loaded", []
    processed_img = preprocess_image(img_path)
    predictions = model.predict(processed_img)
    predicted_class_idx = np.argmax(predictions[0])
    predicted_class = class_labels[predicted_class_idx]
    confidence_scores = predictions[0]
    return predicted_class, confidence_scores

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return "No file part"
        file = request.files['file']
        if file.filename == '':
            return "No selected file"
        if file:
            # Ensure the uploads directory exists
            os.makedirs('uploads', exist_ok=True)
            img_path = os.path.join('uploads', file.filename)
            file.save(img_path)
            predicted_class, confidence_scores = predict_skin_disease(img_path)
            os.remove(img_path)  # Clean up the uploaded file
            return render_template('result.html', predicted_class=predicted_class, confidence_scores=confidence_scores)
    
    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)
