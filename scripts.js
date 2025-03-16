function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    document.getElementById("password").value = password;
    document.getElementById("copybttn").disabled = false;
};

function copyPassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.value) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
          let copymessage = document.getElementById("copy-message");
          copymessage.classList.add("show");
          setTimeout(() => { copymessage.classList.remove("show"); }, 1500); // Hide after 1.5s
        
        }).catch(err => {
            let failmessage = document.getElementById("fail-message");
            failmessage.classList.add("show"); 
            setTimeout(() => { failmessage.classList.remove("show"); }, 1500); // Hide after 1.5s
        });
    }
}