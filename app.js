
let inputPassword = document.getElementById("inputPassword");
let check = document.getElementById("check")
let error = document.getElementById("error");
check.onclick = () => {
    let password = inputPassword.value;

    if (password === "") {
        error.textContent = "Please enter some text!";
        error.style.color = "red";

    }
    else if (password.length < 8) {
        error.textContent = "Password must contain at least 8 characters!";
        error.style.color = "red";
    }
    else if (password === password.toUpperCase()) {
        error.textContent = "Password must contain lowercase letters! "
        error.style.color = "red";
    }
    else if (password === password.toLowerCase()) {
        error.textContent = "Password must contain uppercase letters! "
        error.style.color = "red"

    }
    else {
        let hasDigit = false;
        let hasSpecialChar = false;
        let specialChars = ['!', '@', '#', '$', '&', '*'];

        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                hasDigit = true;
            }
            if (specialChars.includes(password[i])) {
                hasSpecialChar = true;
            }
        }

        if (hasDigit && hasSpecialChar) {
            error.textContent = "Password is strong!🎉 ";
            error.style.color = "green";
        } else if (!hasDigit) {
            error.textContent = "Password must contain one digit!";
            error.style.color = "red";
        } else if (!hasSpecialChar) {
            error.textContent = "Password must contain one special character!";
            error.style.color = "red";
        }

    }


}   
