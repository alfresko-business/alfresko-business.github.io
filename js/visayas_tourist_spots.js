// JavaScript //
var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var footer_logo = document.getElementById("footer_logo");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "shop.html";
}

contact_button.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}

// For cards to make it clickable and redirect it to their corresponding pages
var cards_chocolate_hills = document.getElementById("cards_chocolate_hills");

cards_chocolate_hills.onclick = function() {
    window.location.href = "chocolate_hills.html";
}