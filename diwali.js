function generateMessage() {
    const name = document.getElementById("nameInput").value;
    if (name) {
      const message = `Wishing you a Diwali filled with joy and prosperity, ${name}!`;
      document.getElementById("message").innerText = message;
    } else {
      document.getElementById("message").innerText = "Please enter a name.";
    }
  }