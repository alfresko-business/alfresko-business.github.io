// JavaScript //
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