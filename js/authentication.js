var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function () {
    document.getElementById('authentication_content').scrollIntoView();
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

isLoggedIn();
function isLoggedIn() {
    const userLoggedIn  = localStorage.getItem("userLoggedIn");
    const authentication_content = document.getElementById("authentication_content");
    const logged_in = document.getElementById("logged_in");

    if (userLoggedIn === "false") {
        authentication_content.style.display = "block";
        logged_in.style.display = "none";
    } else {
        authentication_content.style.display = "none";
        logged_in.style.display = "block";
    }
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
            localStorage.setItem("userLoggedIn", userLoggedIn);
            enableFeatures();
            window.location.href = "authentication.html";
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

// Log out
var logout_button = document.getElementById("logout");
logout_button.onclick = function() {
    alert("Logout successfully.");
    console.log("User logged out");
    userLoggedIn = false;
    localStorage.setItem("userLoggedIn", userLoggedIn);
    window.location.href = "authentication.html";
}
