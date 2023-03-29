// JavaScript //

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
var contact_button = document.getElementById("contact_button");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

contact_button.onclick = function() {
    window.location.href = "contact.html";
}


// Code for four color buttons
// This code will help user to identify what is the currently selected color button based on user's preference
var green_button = document.getElementById("button_green");
var yellow_button = document.getElementById("button_yellow");
var brown_button = document.getElementById("button_brown");
var red_button = document.getElementById("button_red");
const tourist_spot_cards_green = document.getElementsByClassName("tourist_spot_cards_green");
const tourist_spot_cards_yellow = document.getElementsByClassName("tourist_spot_cards_yellow");
const tourist_spot_cards_brown = document.getElementsByClassName("tourist_spot_cards_brown");
const tourist_spot_cards_red = document.getElementsByClassName("tourist_spot_cards_red");

green_button.onclick = function() {
    for (let i = 0; i < tourist_spot_cards_green.length; i++) {
        tourist_spot_cards_green[i].classList.remove("tourist_spot_cards_green_hide");
        // tourist_spot_cards_yellow[i].classList.add("tourist_spot_cards_yellow_hide");
        // tourist_spot_cards_red[i].classList.add("tourist_spot_cards_red_hide");
    }

    for (let i = 0; i < tourist_spot_cards_yellow.length; i++) {
        tourist_spot_cards_yellow[i].classList.add("tourist_spot_cards_yellow_hide");
    }

    for (let i = 0; i < tourist_spot_cards_brown.length; i++) {
        tourist_spot_cards_brown[i].classList.add("tourist_spot_cards_brown_hide");
    }

    for (let i = 0; i < tourist_spot_cards_red.length; i++) {
        tourist_spot_cards_red[i].classList.add("tourist_spot_cards_red_hide");
    }


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
    for (let i = 0; i < tourist_spot_cards_yellow.length; i++) {
        tourist_spot_cards_yellow[i].classList.remove("tourist_spot_cards_yellow_hide");
    }

    for (let i = 0; i < tourist_spot_cards_green.length; i++) {
        tourist_spot_cards_green[i].classList.add("tourist_spot_cards_green_hide");
    }

    for (let i = 0; i < tourist_spot_cards_brown.length; i++) {
        tourist_spot_cards_brown[i].classList.add("tourist_spot_cards_brown_hide");
    }

    for (let i = 0; i < tourist_spot_cards_red.length; i++) {
        tourist_spot_cards_red[i].classList.add("tourist_spot_cards_red_hide");
    }

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
    for (let i = 0; i < tourist_spot_cards_brown.length; i++) {
        tourist_spot_cards_brown[i].classList.remove("tourist_spot_cards_brown_hide");
    }

    for (let i = 0; i < tourist_spot_cards_green.length; i++) {
        tourist_spot_cards_green[i].classList.add("tourist_spot_cards_green_hide");
    }

    for (let i = 0; i < tourist_spot_cards_yellow.length; i++) {
        tourist_spot_cards_yellow[i].classList.add("tourist_spot_cards_yellow_hide");
    }

    for (let i = 0; i < tourist_spot_cards_red.length; i++) {
        tourist_spot_cards_red[i].classList.add("tourist_spot_cards_red_hide");
    }
    
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
    for (let i = 0; i < tourist_spot_cards_red.length; i++) {
        tourist_spot_cards_red[i].classList.remove("tourist_spot_cards_red_hide");
    }

    for (let i = 0; i < tourist_spot_cards_green.length; i++) {
        tourist_spot_cards_green[i].classList.add("tourist_spot_cards_green_hide");
    }

    for (let i = 0; i < tourist_spot_cards_yellow.length; i++) {
        tourist_spot_cards_yellow[i].classList.add("tourist_spot_cards_yellow_hide");
    }

    for (let i = 0; i < tourist_spot_cards_brown.length; i++) {
        tourist_spot_cards_brown[i].classList.add("tourist_spot_cards_brown_hide");
    }

    red_button.style.backgroundColor = "#d17474";
    red_button.style.color = "black";

    green_button.style.backgroundColor = "rgb(42, 42, 42)";
    green_button.style.color = "white";
    yellow_button.style.backgroundColor = "rgb(42, 42, 42)";
    yellow_button.style.color = "white";
    brown_button.style.backgroundColor = "rgb(42, 42, 42)";
    brown_button.style.color = "white";
}


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