function login() {
    let emailOrPhone = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    let phonePattern = /^[0-9]{10,15}$/; 

    if (emailOrPhone === "" || password === "") {
        alert("Please fill in both fields.");
    } else if (emailPattern.test(emailOrPhone) || phonePattern.test(emailOrPhone)) {
        alert("Logging in with " + emailOrPhone);
    } else {
        alert("Please enter a valid email or phone number.");
    }
}

