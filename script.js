document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var aadhaar = document.getElementById("aadhaar").value;
    var contact = document.getElementById("contact").value;
  
    // Password validation
    var passwordError = document.getElementById("password-error");
    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match";
      return;
    } else {
      passwordError.textContent = "";
    }
  
    // Aadhaar number validation
    var aadhaarError = document.getElementById("aadhaar-error");
    if (aadhaar.length !== 12 || isNaN(aadhaar)) {
      aadhaarError.textContent = "Aadhaar number must be exactly 12 digits";
      return;
    } else {
      aadhaarError.textContent = "";
    }
  
    // Contact number validation
    var contactError = document.getElementById("contact-error");
    if (contact.length !== 10 || isNaN(contact)) {
      contactError.textContent = "Contact number must be exactly 10 digits";
      return;
    } else {
      contactError.textContent = "";
    }
  
    // Display form values
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-password").textContent = "[hidden]";
    document.getElementById("display-confirm-password").textContent = "[hidden]";
    document.getElementById("display-aadhaar").textContent = aadhaar;
    document.getElementById("display-contact").textContent = contact;
  
    // Show the result section
    document.getElementById("result").style.display = "block";
  });
  
  