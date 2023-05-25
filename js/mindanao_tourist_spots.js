var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('mindanao_quick_overview_container').scrollIntoView();
}

// For cards to make it clickable and redirect it to their corresponding pages
var cards_aliwagwag_falls = document.getElementById("cards_aliwagwag_falls");
var cards_lake_sebu = document.getElementById("cards_lake_sebu");
var cards_mount_apo = document.getElementById("cards_mount_apo");
var cards_lake_agco = document.getElementById("cards_lake_agco");

cards_aliwagwag_falls.onclick = function() {
    window.location.href = "aliwagwag_falls.html";
}

cards_lake_sebu.onclick = function() {
    window.location.href = "lake_sebu.html";
}

cards_mount_apo.onclick = function() {
    window.location.href = "mount_apo.html";
}

cards_lake_agco.onclick = function() {
    window.location.href = "lake_agco.html";
}
