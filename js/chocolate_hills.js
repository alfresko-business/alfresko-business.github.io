// JavaScript //
// Use for setting values on scroll-margin-top for certain sections of homepage so that the top content won't go underneath the sticky header
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('overview_container').scrollIntoView();
}

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

user_login_button.onclick = function() {
    window.location.href = "authentication.html";
}

contact_button.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}
