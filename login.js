document.querySelector(".landing-login-button").addEventListener("click", function loginAuthentication() {
    const users = [
        { userName: "Oemer_Isbacar", password: "Isbacar$42Blue!", redirectUrl: "loginSuccess.html"},
        { userName: "Luca_Kaupe", password: "KaupeBackpack$platinum99", redirectUrl: "loginSuccess.html"},
        { userName: "Mirjam_Köckert", password: "Köckert$42Pink", redirectUrl: "loginSuccess.html"},
        { userName: "Pascal_Weiß", password: "Weiß$42White", redirectUrl: "loginSucces.html"},
    ];
    const enteredName = document.querySelector("#national-ID").value;
    const enteredPassword = document.querySelector("#password").value;

    const matchedUser = users.find(user =>
        user.userName === enteredName && user.password === enteredPassword
    );

    if (matchedUser) {
        window.location.href = "loginSuccess.html";
    } else {
        document.querySelector("#loginAttempt").innerHTML = "Wrong username or password!"
        document.querySelector("#loginAttempt").style.color = "red";
    }
});
