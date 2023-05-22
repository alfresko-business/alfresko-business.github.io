// JavaScript //
var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var contact_button = document.getElementById("contact_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('luzon_quick_overview_container').scrollIntoView();
}

// For cards to make it clickable and redirect it to their corresponding pages
var cards_banaue_rice_terraces = document.getElementById("cards_banaue_rice_terraces");
var cards_puerto_princesa_underground_river = document.getElementById("cards_puerto_princesa_underground_river");

cards_banaue_rice_terraces.onclick = function() {
    window.location.href = "banaue_rice_terraces.html";
}

cards_puerto_princesa_underground_river.onclick = function() {
    window.location.href = "puerto_princesa_underground_river.html";
}
