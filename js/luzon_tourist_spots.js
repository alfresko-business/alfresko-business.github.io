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
var cards_el_nido_palawan = document.getElementById("cards_el_nido_palawan");
var cards_hundred_island_national_park = document.getElementById("cards_hundred_island_national_park");
var cards_mayon_volcano = document.getElementById("cards_mayon_volcano");
var cards_pagsanjan_falls = document.getElementById("cards_pagsanjan_falls");
var cards_taal_volcano = document.getElementById("cards_taal_volcano");
var cards_national_musuem_of_fine_arts = document.getElementById("cards_national_musuem_of_fine_arts");

cards_banaue_rice_terraces.onclick = function() {
    window.location.href = "banaue_rice_terraces.html";
}

cards_puerto_princesa_underground_river.onclick = function() {
    window.location.href = "puerto_princesa_underground_river.html";
}

cards_el_nido_palawan.onclick = function() {
    window.location.href = "el_nido_palawan.html";
}

cards_hundred_island_national_park.onclick = function() {
    window.location.href = "hundred_islands_national_park.html";
}

cards_mayon_volcano.onclick = function() {
    window.location.href = "mayon_volcano.html";
}

cards_pagsanjan_falls.onclick = function() {
    window.location.href = "pagsanjan_falls.html";
}

cards_taal_volcano.onclick = function() {
    window.location.href = "taal_volcano.html";
}

cards_national_musuem_of_fine_arts.onclick = function() {
    window.location.href = "national_musuem_of_fine_arts.html";
}
