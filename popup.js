document.getElementById('checkBtn').addEventListener('click', async () => {
  const text = document.getElementById('inputText').value;
  const type = document.getElementById('type').value;
  const resultText = document.getElementById('resultText');

  if (!text) {
    resultText.textContent = "Please enter something.";
    return;
  }

  const url = type === "url" 
    ? "http://127.0.0.1:5000/predict/url" 
    : "http://127.0.0.1:5000/predict/email";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        [type === "url" ? "url" : "email_text"]: text
      })
    });

    const data = await res.json();
    resultText.textContent = "Result: " + data.result;

  } catch (error) {
    resultText.textContent = "Error connecting to backend.";
  }
});
