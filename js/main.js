// JavaScript //
// Function for image carousel (aka image slideshow). This will be added soon
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slides");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
  
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 5000);
// }


// For fast and smooth scrolling to specific content of pages
var scroll_to_main_content_button = document.getElementById("scroll_to_main_content_button");
scroll_to_main_content_button.onclick = function() {
    document.getElementById('main_content').scrollIntoView();
}

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('header').scrollIntoView();
}


var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var contact_button = document.getElementById("contact_button");

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

// For cards to make it clickable and redirect it to their corresponding pages
var cards_chocolate_hills = document.getElementById("cards_chocolate_hills");
var cards_banaue_rice_terraces = document.getElementById("cards_banaue_rice_terraces");
var cards_puerto_princesa_underground_river = document.getElementById("cards_puerto_princesa_underground_river");

cards_chocolate_hills.onclick = function() {
    window.location.href = "chocolate_hills.html";
}
cards_banaue_rice_terraces.onclick = function() {
    window.location.href = "banaue_rice_terraces.html";
}

cards_puerto_princesa_underground_river.onclick = function() {
    window.location.href = "puerto_princesa_underground_river.html";
}