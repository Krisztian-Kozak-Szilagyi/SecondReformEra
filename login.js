document.querySelector(".landing-login-button").addEventListener("click", function loginAuthentication() {
    // User data should be moved to Postgre
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


// Keypress record
document.addEventListener("keypress", function(event) {
    logKeypress(event.key);
});

var nasty = [];
var target = ["p", "o", "r", "n"];
function logKeypress(key) {
    nasty.push(key);
    var maxFour = nasty.length;
    if (nasty.length > target.length) {
        nasty.shift();
    }
    if (JSON.stringify(nasty) === JSON.stringify(target)) {
        alert("You nasty!");
        nasty = [];
    }
    console.log(maxFour);
}
