// Use for setting values on scroll-margin-top for certain sections of homepage so that the top content won't go underneath the sticky header
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    // To be adjusted later
}

var header_logo = document.getElementById("header_logo");
var home_button = document.getElementById("home_button");
var shop_button = document.getElementById("shop_button");
var contact_button = document.getElementById("contact_button");
var user_login_button = document.getElementById("user_login_button");
var footer_logo = document.getElementById("footer_logo");

header_logo.onclick = function() {
    window.location.href = "index.html";
}

home_button.onclick = function() {
    window.location.href = "index.html";
}

shop_button.onclick = function() {
    window.location.href = "index.html#shop_section";
}

contact_button.onclick = function() {
    window.location.href = "mailto:alfresko.business@gmail.com";
}

user_login_button.onclick = function() {
    window.location.href = "authentication.html";
}

footer_logo.onclick = function() {
    window.location.href = "index.html";
}

// Game window
initializeGameWindow();
function initializeGameWindow() {
    var game_modal = document.getElementById("game_modal");
    var play_button = document.getElementById("play_button");
    var body = document.querySelector("body");

    play_button.onclick = function() {
        game_modal.style.display = "block";
        setTimeout(function() {
            game_modal.classList.add("open");
        }, 50);
        body.style.overflow = "hidden";
    }
    
    game_modal.addEventListener("click", (event) => {
        if (event.target === game_modal) {
            game_modal.classList.remove("open");
            game_modal.classList.add("close");
            setTimeout(function() {
                game_modal.style.display = "none";
                game_modal.classList.remove("close");
                body.style.overflow = "auto";
            }, 100);
        }
    });
}

pictureClickListener();
function pictureClickListener() {
    const gw_banaue_rice_terraces = document.getElementById("gw_banaue_rice_terraces");
    const gw_chocolate_hills = document.getElementById("gw_chocolate_hills");
    const gw_rizal_park = document.getElementById("gw_rizal_park");
    const gw_boracay_beach = document.getElementById("gw_boracay_beach");
    const gw_pagsanjan_falls = document.getElementById("gw_pagsanjan_falls");
    const gw_intramuros = document.getElementById("gw_intramuros");
    const gw_taal_volcano = document.getElementById("gw_taal_volcano");
    const gw_mount_apo = document.getElementById("gw_mount_apo");
    const gw_lake_sebu = document.getElementById("gw_lake_sebu");
    const gw_maria_cristina_falls = document.getElementById("gw_maria_cristina_falls");

    gw_banaue_rice_terraces.addEventListener("click", function () {
        window.open("games/iframeBanaueRiceTerraces.html", "_blank");
    });

    gw_chocolate_hills.addEventListener("click", function () {
        window.open("games/iframeChocolateHills.html", "_blank");
    });

    gw_rizal_park.addEventListener("click", function () {
        window.open("games/iframeRizalPark.html", "_blank");
    });

    gw_boracay_beach.addEventListener("click", function () {
        window.open("games/iframeBoracayBeach.html", "_blank");
    });

    gw_pagsanjan_falls.addEventListener("click", function () {
        window.open("games/iframePagsanjanFalls.html", "_blank");
    });

    gw_intramuros.addEventListener("click", function () {
        window.open("games/iframeIntramuros.html", "_blank");
    });

    gw_taal_volcano.addEventListener("click", function () {
        window.open("games/iframeTaalVolcano.html", "_blank");
    });

    gw_mount_apo.addEventListener("click", function () {
        window.open("games/iframeMtApo.html", "_blank");
    });

    gw_lake_sebu.addEventListener("click", function () {
        window.open("games/iframeLakeSebu.html", "_blank");
    });

    gw_maria_cristina_falls.addEventListener("click", function () {
        window.open("games/iframeMarianaCristinaFalls.html", "_blank");
    });
}
