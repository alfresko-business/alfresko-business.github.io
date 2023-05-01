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


// Checkout window
var order_now_button = document.getElementById("order_now_button");
var shop_modal = document.getElementById("shop_modal");

order_now_button.onclick = function() {
    shop_modal.style.display = "block";
}

shop_modal.addEventListener("click", (event) => {
    if (event.target === shop_modal) {
      // Close the modal window
      shop_modal.style.display = "none";
    }
  });
