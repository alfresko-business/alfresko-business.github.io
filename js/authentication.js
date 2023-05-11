var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function () {
    document.getElementById('header').scrollIntoView();
}

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var contact_button = document.getElementById("contact_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");

header_logo.onclick = function () {
    window.location.href = "index.html";
}

home_button.onclick = function () {
    window.location.href = "index.html";
}

shop_button.onclick = function () {
    window.location.href = "index.html#shop_section";
}

contact_button.onclick = function () {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

user_login_button.onclick = function () {
    window.location.href = "authentication.html";
}

footer_logo.onclick = function () {
    window.location.href = "index.html";
}

var login = document.getElementById("login");
var signup = document.getElementById("signup");
var login_switch_button = document.getElementById("login_switch_button");
var signup_switch_button = document.getElementById("signup_switch_button");

signup_switch_button.onclick = function () {
    login.style.display = "none";
    signup.style.display = "flex";
}

login_switch_button.onclick = function () {
    signup.style.display = "none";
    login.style.display = "flex";
}



// Sign-up and login code
// Take note that using IndexedDB is not recommended for an account authentication system because of the security risks it poses. We chose IndexedDB as our client-side database because this website is dedicated for local or offline use, as well as for the sake of implementing an easy sign up and login system. From a security standpoint, this is not recommended. Implementing this in your own projects can pose security risks.

const dbName = "userDatabase";
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

let db;
let userLoggedIn = false;

request.onerror = function (event) {
    console.log("Error opening IndexedDB database");
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("IndexedDB database successfully opened");
};

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    const objectStore = db.createObjectStore("users", { keyPath: "username" });
    objectStore.createIndex("password", "password", { unique: false });

    console.log("IndexedDB object store created");
};

function signUp(username, password) {
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const user = {
        username: username,
        password: password
    };

    const request = objectStore.add(user);

    request.onerror = function (event) {
        alert("Unexpected error happened. Please try again.");
        console.log("Error adding user to IndexedDB database");
    };

    request.onsuccess = function (event) {
        alert("Account created. Please head to login page.");
        console.log("User added to IndexedDB database");
    };
}

function logIn(username, password) {
    const transaction = db.transaction(["users"], "readonly");
    const objectStore = transaction.objectStore("users");

    const index = objectStore.index("password");
    const request = index.get(password);

    request.onerror = function (event) {
        console.log("Error logging in user");
    };

    request.onsuccess = function (event) {
        const user = event.target.result;
        if (user && user.username === username) {
            alert("Login success.");
            console.log("User logged in");
            userLoggedIn = true;
            enableFeatures()
        } else {
            alert("Invalid username and/or password. Please try again.");
            console.log("Incorrect username or password");
        }
    };
}

function enableFeatures() {
    if (userLoggedIn) {
        // Enable certain features
        console.log("Features enabled");
    } else {
        // Disable certain features
        alert("Invalid username and/or password. Please try again.");
    }
}

const signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = signUpForm.elements["username"].value;
    const password = signUpForm.elements["password"].value;
    signUp(username, password);
});

const logInForm = document.getElementById("log-in-form");
logInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = logInForm.elements["username"].value;
    const password = logInForm.elements["password"].value;
    logIn(username, password);
});

