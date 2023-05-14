var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function () {
    document.getElementById('overview_container').scrollIntoView();
}

initializeImagePreviewContainer();
function initializeImagePreviewContainer() {
    const body = document.querySelector("body");
    const images = document.querySelectorAll('img');
    const previewContainer = document.querySelector('.image_preview_container');
    const previewImage = document.querySelector('.image_preview_container img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            body.style.overflow = "hidden";
            previewImage.src = image.src;
            previewContainer.classList.add('open');
        });
    });

    previewContainer.addEventListener('click', () => {
        previewContainer.classList.remove('open');
        body.style.overflow = "auto";
    });
}
