checkEmail = () => {
    const emailField = document.querySelector(".email-input");
    const result = /^[\w-\.]+@(\w+\.)+\w{2,4}$/.test(emailField.value);
    if(result===false) {
        emailField.style.backgroundColor = "#FFE8E6";
        emailField.style.color = "hsl(4, 100%, 67%)";
        emailField.style.border = "1px solid hsl(4, 100%, 67%)";
        document.querySelector(".error").style.visibility = "visible";
    } else if(result) {
        emailField.style.backgroundColor = "white";
        emailField.style.border = "1px solid hsl(231, 7%, 60%)";
        document.querySelector(".error").style.visibility = "hidden";
        emailField.style.color = "hsl(231, 7%, 60%)";
        const popup = document.querySelector(".popup-container");
        popup.setAttribute("id", "show")
        const submittedEmail = document.querySelector(".email-sent");
        submittedEmail.textContent = emailField.value;
        document.body.style.overflowY = "hidden";
    }
}

closewindow = () => {
    const popup = document.querySelector(".popup-container");
    popup.removeAttribute("id")
    document.body.style.overflowY = "visible";
}