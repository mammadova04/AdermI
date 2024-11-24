# Skin Disease Classification Model v1

## Overview

This repository contains a Convolutional Neural Network (CNN) model for classifying skin diseases based on images. The model is designed to identify four different skin conditions: Acne, Atopic Dermatitis, Basal Cell Carcinoma (BCC), and Melanoma. The implementation utilizes TensorFlow and Keras for deep learning.

## Table of Contents
- [Installation](#installation)
- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Training](#training)
- [Fine-Tuning](#fine-tuning)
- [Evaluation](#evaluation)
- [Usage](#usage)

## Installation

To run this model, you need to have Python and the following libraries installed:

```bash
pip install tensorflow
pip install numpy
pip install matplotlib
```

## Dataset

The dataset should be organized into three main directories: `train`, `validation`, and `test`, each containing subdirectories for the respective skin diseases:

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
  - Acne: 1,611
  - Atopic: 1,557
  - BCC: 1,605
  - Melanoma: 1,604
- **Validation**: 288 images
  - Acne: 72
  - Atopic: 70
  - BCC: 68
  - Melanoma: 78
- **Test**: 271 images
  - Acne: 68
  - Atopic: 67
  - BCC: 70
  - Melanoma: 66

## Model Architecture

The CNN model consists of the following layers:
1. Convolutional layers for feature extraction.
2. MaxPooling layers to reduce spatial dimensions.
3. Flatten layer to convert the 2D feature maps into a 1D vector.
4. Dense layers for classification with a dropout layer for regularization.
5. The output layer uses a softmax activation function for multi-class classification.

## Training

To train the model, run the provided code. The model is compiled using the Adam optimizer and categorical cross-entropy loss. The training process includes:

- Data augmentation for the training dataset.
- Validation accuracy tracking during training.

## Fine-Tuning

After the initial training, the model can be fine-tuned by unfreezing the last few layers and continuing the training process with a lower learning rate. This allows for better adaptation to the specific characteristics of the dataset.

## Evaluation

The model can be evaluated on the test dataset to determine its accuracy. The test accuracy will be printed after the evaluation.

## Usage

To use the model, modify the following lines in the code to point to your dataset directory:

```python
train_dir = '/path/to/train'
valid_dir = '/path/to/valid'
test_dir = '/path/to/test'
```

Then, execute the training and evaluation code.

Author: Narmin Mammadova (@mammadova04)
---
