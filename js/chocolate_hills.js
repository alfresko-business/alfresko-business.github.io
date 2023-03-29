// JavaScript //
var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('header').scrollIntoView();
}



var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

contact_button.onclick = function() {
    window.location.href = "contact.html";
}