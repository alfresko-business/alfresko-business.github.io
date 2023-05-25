// JavaScript //
var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('main_content').scrollIntoView();
}

// For cards to make it clickable and redirect it to their corresponding pages
var cards_chocolate_hills = document.getElementById("cards_chocolate_hills");
var cards_boracay_island = document.getElementById("cards_boracay_island");
var cards_the_ruins = document.getElementById("cards_the_ruins");
var cards_kawasan_falls = document.getElementById("cards_kawasan_falls");

cards_chocolate_hills.onclick = function() {
    window.location.href = "chocolate_hills.html";
}

cards_boracay_island.onclick = function() {
    window.location.href = "boracay_island.html";
}

cards_the_ruins.onclick = function() {
    window.location.href = "the_ruins.html";
}

cards_kawasan_falls.onclick = function() {
    window.location.href = "kawasan_falls.html";
}
