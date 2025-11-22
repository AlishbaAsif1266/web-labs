const email = document.getElementById("email");
const msg = document.getElementById("msg");

email.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email.value)){
        msg.textContent = "Valid Email";
        msg.style.color = "green";
    } else {
        msg.textContent = "Invalid Email";
        msg.style.color = "red";
    }
})

