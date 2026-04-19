function validatePhone() {
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error");

    // Check if phone is 10 digits and only numbers
    if (phone.length !== 10 || isNaN(phone)) {
        error.innerText = "Enter a valid 10-digit phone number";
        return false;
    } else {
        error.innerText = "";
        alert("Registration Successful!");
        return true;
    }
}
