// Use for setting values on scroll-margin-top for certain sections of homepage so that the top content won't go underneath the sticky header
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var sh_home_button = document.getElementById("sh_home_button");
var sh_shop_button = document.getElementById("sh_shop_button");
var sh_user_login_button = document.getElementById("sh_user_login_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");
var footer_email = document.getElementById("footer_email");
var footer_location = document.getElementById("footer_location");
var hamburger_button = document.getElementById("hamburger_button");
var sub_header = document.getElementById("sub_header");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

sh_home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

sh_shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

user_login_button.onclick = function() {
    window.location.href = "authentication.html";
}

sh_user_login_button.onclick = function() {
    window.location.href = "authentication.html";
}

hamburger_button.onclick = function() {
    if (sub_header.style.display === "flex") {
        sub_header.style.display = "none";
    } else {
        sub_header.style.display = "flex";
    }

    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}

footer_email.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

footer_location.onclick = function() {
    window.location.href = "https://goo.gl/maps/GLnTcryyHhBsZn6Z8?coh=178573&entry=tt";
}

window.addEventListener('resize', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth > 576) {
        sub_header.style.display = 'none';
    }
});
