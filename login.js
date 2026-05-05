document.querySelector(".landing-login-button").addEventListener("click", function loginAuthentication() {
    const loginData = {
        userName: "Oemer_Isbacar", 
        password: "Isbacar$42Blue!"
    };
    const enteredName = document.querySelector("#national-ID").value;
    const enteredPassword = document.querySelector("#password").value;
    if (enteredName === loginData.userName && enteredPassword === loginData.password) {
        window.location.href = "loginSuccess.html";
    } else {
        document.querySelector("#loginAttempt").innerHTML = "Wrong username or password!"
        document.querySelector("#loginAttempt").style.color = "red";
    }
});
