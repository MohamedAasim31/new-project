function validateForm() {
  
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("submitSuccess").textContent = "";

  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

   
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

   
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        valid = false;
    }

    // If all fields are valid, submit success message
    if (valid) {
        document.getElementById("submitSuccess").textContent = "Form submitted successfully!";
    }
}
