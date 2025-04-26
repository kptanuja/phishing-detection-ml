// background.js (Service Worker)

// This listens for when the extension is installed or reloaded
chrome.runtime.onInstalled.addListener(() => {
    // Create a context menu when the extension is installed
    chrome.contextMenus.create({
      id: "check-url",
      title: "Check for Phishing URL",
      contexts: ["link"]
    });
  
    chrome.contextMenus.create({
      id: "check-email",
      title: "Check Email for Phishing",
      contexts: ["selection"]
    });
  });
  
  // This listens for clicks on the context menu
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "check-url") {
      const url = info.linkUrl;
      checkUrlForPhishing(url);
    } else if (info.menuItemId === "check-email") {
      const emailContent = info.selectionText;
      checkEmailForPhishing(emailContent);
    }
  });
  
  // Function to check URL for phishing (you will define your own logic here)
  function checkUrlForPhishing(url) {
    console.log("Checking URL for phishing:", url);
    // Implement your machine learning model or logic here
  }
  
  // Function to check email for phishing (you will define your own logic here)
  function checkEmailForPhishing(emailContent) {
    console.log("Checking email for phishing:", emailContent);
    // Implement your machine learning model or logic here
  }
  