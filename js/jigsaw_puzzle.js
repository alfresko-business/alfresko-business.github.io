var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('main_content').scrollIntoView();
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
    
    if (window.innerWidth < 768) {
        var divs = document.querySelectorAll('.gw_picture_container div');

        divs.forEach(function (div) {
            var p = div.querySelector('p');
            p.style.opacity = '1';
        });
    } 
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
