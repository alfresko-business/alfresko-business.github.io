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
var scroll_to_tourist_destination_section_button = document.getElementById("scroll_to_tourist_destination_section_button");
scroll_to_tourist_destination_section_button.onclick = function() {
    document.getElementById('tourist_destination_section').scrollIntoView();
}

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('header').scrollIntoView();
}


var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
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


var luzon_card_button = document.getElementById("luzon_card_button");
luzon_card_button.onclick = function() {
    window.location.href = "luzon_tourist_spots.html"
}

var visayas_card_button = document.getElementById("visayas_card_button");
visayas_card_button.onclick = function() {
    window.location.href = "visayas_tourist_spots.html"
}

var mindanao_card_button = document.getElementById("mindanao_card_button");
mindanao_card_button.onclick = function() {
    window.location.href = "mindanao_tourist_spots.html"
}