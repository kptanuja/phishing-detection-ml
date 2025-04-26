// Function to handle the email check
document.getElementById("email-check-btn").addEventListener("click", function () {
    const emailText = document.getElementById("email-input").value;
    
    if (emailText.trim() === "") {
        alert("Please enter an email to check.");
        return;
    }

    // Disable the email check button after first click
    document.getElementById("email-check-btn").disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Simulated result (replace with actual API call)
        const result = Math.random() < 0.5 ? "phishing" : "safe";  

        displayResult(result, 'email');
    }, 1000);
});

// Function to handle the URL check
document.getElementById("url-check-btn").addEventListener("click", function () {
    const urlText = document.getElementById("url-input").value;

    if (urlText.trim() === "") {
        alert("Please enter a URL to check.");
        return;
    }

    // Disable the URL check button after first click
    document.getElementById("url-check-btn").disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Simulated result (replace with actual API call)
        const result = Math.random() < 0.5 ? "suspicious" : "safe";  

        displayResult(result, 'url');
    }, 1000);
});

// Function to display the result
function displayResult(result, type) {
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("result-text");

    // Update result text based on result
    if (result === "safe") {
        resultDiv.classList.remove("phishing", "suspicious");
        resultDiv.classList.add("safe");
        resultText.textContent = type === 'email' ? "This is a safe email." : "This is a safe URL.";
    } else if (result === "suspicious") {
        resultDiv.classList.remove("safe", "phishing");
        resultDiv.classList.add("suspicious");
        resultText.textContent = type === 'email' ? "This email is suspicious." : "This URL is suspicious.";
    } else if (result === "phishing") {
        resultDiv.classList.remove("safe", "suspicious");
        resultDiv.classList.add("phishing");
        resultText.textContent = "This is a phishing email or URL!";
    }

    // Display the result div
    resultDiv.style.display = "block";
}

// Re-enable the buttons if the user enters new data
document.getElementById("email-input").addEventListener("input", function () {
    document.getElementById("email-check-btn").disabled = false;
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none"; // Hide result on new input
});

document.getElementById("url-input").addEventListener("input", function () {
    document.getElementById("url-check-btn").disabled = false;
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "none"; // Hide result on new input
});
