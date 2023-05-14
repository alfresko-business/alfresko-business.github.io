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
}
