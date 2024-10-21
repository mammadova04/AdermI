# Skin Disease Classification Model v2

## Overview

This is version 2 of the Convolutional Neural Network (CNN) model for classifying skin diseases. The model is designed to classify four types of skin conditions: Acne, Atopic Dermatitis, Basal Cell Carcinoma (BCC), and Melanoma. 

In this version, the number of training epochs has been increased to 54, resulting in improved performance. After comparing the validation accuracies of the model with and without fine-tuning, it was determined that the model without fine-tuning performs better. The final validation accuracy achieved without fine-tuning is **82.99%**.

## Table of Contents
- [Changes from Version 1](#changes-from-version-1)
- [Installation](#installation)
- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Training](#training)
- [Evaluation](#evaluation)
- [Usage](#usage)
- [License](#license)

## Changes from Version 1

1. **Increased Epochs**: The number of training epochs was increased from the initial count to 54 to improve accuracy and convergence.
2. **Validation Accuracy**:
   - **Without Fine-Tuning**: Achieved a validation accuracy of **82.99%**.
   - **With Fine-Tuning**: Achieved a slightly lower validation accuracy of **81.94%**.
   
   Based on these results, the model **without fine-tuning** was chosen as the final version.

## Installation

To run this model, ensure you have Python installed along with the following dependencies:

```bash
pip install tensorflow
pip install numpy
pip install matplotlib
```

## Dataset

The dataset used for this model is organized into three directories: `train`, `validation`, and `test`, each containing images for the four skin diseases:

```
dataset/
├── train/
│   ├── acne/
│   ├── atopic/
│   ├── bcc/
│   └── melanoma/
├── valid/
│   ├── acne/
│   ├── atopic/
│   ├── bcc/
│   └── melanoma/
└── test/
    ├── acne/
    ├── atopic/
    ├── bcc/
    └── melanoma/
```

### Image Count
- **Train**: 6,227 images
- **Validation**: 288 images
- **Test**: 271 images

## Model Architecture

The CNN model consists of the following components:
1. **Convolutional Layers**: To extract features from the images.
2. **MaxPooling Layers**: To reduce the spatial dimensions of the feature maps.
3. **Dropout Layers**: To prevent overfitting.
4. **Dense Layers**: To perform the final classification.
5. **Output Layer**: Softmax activation for multi-class classification.

## Training

The model was trained on the dataset for **54 epochs** using the following configuration:
- **Optimizer**: Adam
- **Loss Function**: Categorical Crossentropy
- **Batch Size**: 32

Data augmentation techniques such as random rotation and horizontal flipping were applied to improve generalization.

## Evaluation

After training, the model was evaluated on the validation and test datasets.

### Validation Accuracy:
- **Without Fine-Tuning**: **82.99%**
- **With Fine-Tuning**: **81.94%**

Based on this comparison, the model without fine-tuning was chosen as the final version.

### Test Accuracy:
You can evaluate the model's performance on the test dataset by running the evaluation script (refer to the usage section below).

## Usage

To use the model, modify the following lines in the script to point to your dataset and saved model:

1. **Load the Model**:
   ```python
   model = tf.keras.models.load_model('skin_disease_classifier_v2.keras')
   ```

2. **Prediction on Custom Images**:
   You can test the model on custom images using the script provided in `test_custom_image.py` (refer to the README of version 1 for instructions).

3. **Evaluate on Test Dataset**:
   ```python
   model.evaluate(test_data_generator)
   ```

Author: Narmin Mammadova @mammadova04

