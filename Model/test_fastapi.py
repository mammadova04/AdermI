from fastapi import FastAPI, File, UploadFile
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
import os
import shutil
import uvicorn

# Path to your trained model (update this with the correct file path)
model_path = 'skin_disease_classifier_v2.keras'

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

from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
@app.post("/predict")
def upload_file(file: UploadFile):
    os.makedirs('uploads', exist_ok=True)
    file_path = f"uploads/{file.filename}"
    with open(file_path, "wb") as f:
        f.write(file.file.read())
    
    predicted_class, confidence_scores = predict_skin_disease(file_path)
    shutil.rmtree("uploads")
    return {"predicted_class": predicted_class, "confidence_scores": confidence_scores.tolist()}, 200