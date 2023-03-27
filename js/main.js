// JavaScript //

var scroll_button = document.getElementById("scroll_button");
scroll_button.onclick = function() {
    document.getElementById('main_content').scrollIntoView();
}


// Code for four color buttons
// This code will help user to identify what is the currently selected color button based on user's preference
var green_button = document.getElementById("button_green");
var yellow_button = document.getElementById("button_yellow");
var brown_button = document.getElementById("button_brown");
var red_button = document.getElementById("button_red");

green_button.onclick = function() {
    green_button.style.backgroundColor = "#7dae8e";
    green_button.style.color = "black";

    yellow_button.style.backgroundColor = "rgb(42, 42, 42)";
    yellow_button.style.color = "white";
    brown_button.style.backgroundColor = "rgb(42, 42, 42)";
    brown_button.style.color = "white";
    red_button.style.backgroundColor = "rgb(42, 42, 42)";
    red_button.style.color = "white";
}

yellow_button.onclick = function() {
    yellow_button.style.backgroundColor = "#caba73";
    yellow_button.style.color = "black";

    green_button.style.backgroundColor = "rgb(42, 42, 42)";
    green_button.style.color = "white";
    brown_button.style.backgroundColor = "rgb(42, 42, 42)";
    brown_button.style.color = "white";
    red_button.style.backgroundColor = "rgb(42, 42, 42)";
    red_button.style.color = "white";
}

brown_button.onclick = function() {
    brown_button.style.backgroundColor = "#c4997f";
    brown_button.style.color = "black";

    green_button.style.backgroundColor = "rgb(42, 42, 42)";
    green_button.style.color = "white";
    yellow_button.style.backgroundColor = "rgb(42, 42, 42)";
    yellow_button.style.color = "white";
    red_button.style.backgroundColor = "rgb(42, 42, 42)";
    red_button.style.color = "white";
}

red_button.onclick = function() {
    red_button.style.backgroundColor = "#d17474";
    red_button.style.color = "black";

    green_button.style.backgroundColor = "rgb(42, 42, 42)";
    green_button.style.color = "white";
    yellow_button.style.backgroundColor = "rgb(42, 42, 42)";
    yellow_button.style.color = "white";
    brown_button.style.backgroundColor = "rgb(42, 42, 42)";
    brown_button.style.color = "white";
}

//
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