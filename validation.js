function validateEmail(email) {
    // Regular expression pattern for basic email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return pattern.test(email);
  }
  
  const emailInput = document.getElementById("email"); // Replace with your input element's ID
  
  emailInput.addEventListener("blur", function () {
    const email = emailInput.value;
    const isValid = validateEmail(email);
  
    if (isValid) {
      alert("Valid email address");
    } else {
      alert("Invalid email address");
    }
  });