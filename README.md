

# 🛡 Phishing Detection using Machine Learning

This project applies machine learning techniques to detect phishing emails and malicious URLs. It covers data preprocessing, model training, evaluation, and provides a real-time prediction prototype using a Flask backend.

---

## 📖 Solution Overview and Objectives

The objective of this project is to proactively detect phishing threats in emails and URLs using supervised machine learning models.  
Key goals include:
- Build robust classifiers to distinguish phishing from legitimate content.
- Deploy an API-based application for real-time testing.
- Lay the foundation for production-level phishing defense solutions.

---

## 🛠 Tech Stack and Architecture

Tech Stack:
- Python 3.8+
- Flask(for backend API)
- scikit-learn (for machine learning)
- pandas (for data handling)
- numpy (for numerical operations)
- Jupyter Notebook and colab (for model training and experimentation)

---

## 📊 Dataset

> Note: Due to GitHub file size limitations, datasets are hosted externally.

## 📊 Dataset

- 📥 [Phishing Email Dataset (CSV)](https://drive.google.com/uc?export=download&id=1TysDjLFyh6JfYPYfBBubHXPGRgVoCaRv)
- 📥 [Phishing URL Dataset (Excel)](https://drive.google.com/uc?export=download&id=17V0KJekiGFGz7bUBFUzd4MmQR3CX0hmU)


## 📁 Project Files

- email_phishing.ipynb – Model development notebook for phishing email detection.
- url_site.ipynb – Model development notebook for phishing URL detection.
- Phishing_Detection_Report.docx – Full technical documentation.
- app.py – Flask application for real-time detection.
- requirements.txt – Python package dependencies.

---

## 🧪 How to Run Locally

1. Clone the repository:
   bash
   git clone https://github.com/kptanuja
   cd your-repo-name
   

2. Install the required dependencies:
   bash
   pip install -r requirements.txt
   

3. Run the Flask application:
   bash
   python app.py

## 🛠 Implementation Challenges and Resolutions

| Challenge                          | Resolution                         |
|-------------------------------------|------------------------------------|
| Highly imbalanced dataset    | Applied stratified sampling and tuned class weights. |
| Feature extraction from text-heavy email data | Used text vectorization (TF-IDF) for email content. |
| URL complexity and obfuscation| Extracted URL-based features like domain, path length, suspicious patterns. |
| Model overfitting               | Regularization techniques and cross-validation were applied. |
| Real-time prediction speed     | Optimized model size and preprocessing pipelines for minimal latency in Flask app. |

---

## 🚀 Future Scope and Productionization Plan

- Deployment:  
  - Containerize the Flask app using Docker.
  - Deploy to cloud services like AWS/GCP/Azure.

- Model Updates:  
  - Implement automatic re-training pipelines with fresh phishing data (using CRON jobs or cloud triggers).

- Frontend Development:
  - Build a user-friendly React.js dashboard to upload emails/URLs and visualize predictions.

- Browser Extension:  
  - Develop a Chrome/Edge extension for real-time phishing URL warnings while browsing.

- Enterprise Integration:  
  - Integrate the solution with email servers (e.g., Microsoft Exchange, Gmail APIs) for automatic phishing detection at the enterprise level.

---

## 📚 Project Report

For detailed experiments and model evaluations, please refer to the [📄 Phishing Detection Report](https://1drv.ms/w/c/28b256fa2cca3b47/EUCRjqn9RF1PuqilAOVIuXQBK2ZrDMbYVEOj4HegHPjLpg?e=AJaskP).

