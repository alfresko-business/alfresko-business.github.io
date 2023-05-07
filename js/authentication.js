var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('header').scrollIntoView();
}

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var contact_button = document.getElementById("contact_button");
var login_button = document.getElementById("login_button");
var footer_logo = document.getElementById("footer_logo");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

contact_button.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

login_button.onclick = function() {
    window.location.href = "authentication.html";
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}

var login = document.getElementById("login");
var signup = document.getElementById("signup");
var login_switch_button = document.getElementById("login_switch_button");
var signup_switch_button = document.getElementById("signup_switch_button");

signup_switch_button.onclick = function() {
    login.style.display = "none";
    signup.style.display = "flex";
}

login_switch_button.onclick = function() {
    signup.style.display = "none";
    login.style.display = "flex";
}

