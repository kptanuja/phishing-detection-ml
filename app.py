from flask import Flask, request, jsonify
import pickle
import numpy as np
import os
from werkzeug.utils import secure_filename

# Load pre-trained models
#email_model = pickle.load(open('backend/email_model.pkl', 'rb'))
#url_model = pickle.load(open('backend/url_model.pkl', 'rb'))

print("Current working directory:", os.getcwd())

email_model = pickle.load(open(os.path.join(os.getcwd(), 'email_model.pkl'), 'rb'))
url_model = pickle.load(open(os.path.join(os.getcwd(), 'url_model.pkl'), 'rb'))


# Initialize Flask app
app = Flask(__name__)

# Upload folder setup
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Define classification function for emails
def classify_email(text, threshold=0.8):
    prob = email_model.predict_proba([text])[0][1]  # Probability for phishing class
    return 'Phishing' if prob > threshold else 'Safe'

# Define classification function for URLs
def classify_url(url, threshold=0.8):
    prob = url_model.predict_proba([url])[0][1]  # Probability for phishing class
    return 'Phishing' if prob > threshold else 'Safe'

# Route to classify email (JSON text)
@app.route('/predict/email', methods=['POST'])
def predict_email():
    email_text = request.json.get('email_text')
    if not email_text:
        return jsonify({"error": "No email text provided"}), 400
    result = classify_email(email_text)
    return jsonify({"result": result})


# Route to classify URL (JSON text)
@app.route('/predict/url', methods=['POST'])
def predict_url():
    url = request.json.get('url')
    if not url:
        return jsonify({"error": "No URL provided"}), 400
    result = classify_url(url)
    return jsonify({"prediction": result})  # 🔁 Updated key


# Route to classify email from uploaded .txt file
@app.route('/predict/email/file', methods=['POST'])
def predict_email_from_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and file.filename.endswith('.txt'):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        with open(filepath, 'r', encoding='utf-8') as f:
            email_text = f.read()

        result = classify_email(email_text)
        os.remove(filepath)  # Optional cleanup

        return jsonify({"result": result})

    return jsonify({"error": "Only .txt files allowed"}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
    
@app.route('/')
def home():
    return 'Phishing Detector API is running!'
    
