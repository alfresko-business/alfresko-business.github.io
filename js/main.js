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
var body = document.querySelector("body");

order_now_button.onclick = function() {
    shop_modal.style.display = "block";
    setTimeout(function() {
        shop_modal.classList.add("open");
    }, 50);
    body.style.overflow = "hidden";
}

shop_modal.addEventListener("click", (event) => {
    if (event.target === shop_modal) {
        shop_modal.classList.remove("open");
        shop_modal.classList.add("close");
        setTimeout(function() {
            shop_modal.style.display = "none";
            shop_modal.classList.remove("close");
            body.style.overflow = "auto";
        }, 100);
    }
});


// Change background color of button when clicked
const smscw_card_order_cupsize = document.querySelectorAll(".smscw_card_order_cupsize");
smscw_card_order_cupsize.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("smcw_card_order_details_container_button_clicked");
    });
});


// Item counter
// Get all the input number and checkbox elements
const numbers = document.querySelectorAll('.smscw_card_order_chosenquantity');
const checkboxes = document.querySelectorAll('.smcw_card_checkbox');
const PRICE_PER_ITEM = 16;
const TIME_PER_ITEM = 15;

// Add event listeners to each input number and checkbox
numbers.forEach(number => {
    number.addEventListener('input', updateTotal);
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', updateTotal);
});

// Update the total value whenever an input number or checkbox is changed
function updateTotal() {
    let count = 0;
    numbers.forEach((number, index) => {
        if (checkboxes[index].checked) {
            count += Number(number.value);
        }
    });
    document.getElementById('smcw_ppc_subtotal').textContent = "₱" + count * PRICE_PER_ITEM;
    document.getElementById('smcw_paytotal').textContent = count * PRICE_PER_ITEM;
    document.getElementById('smcw_ppc_totalchosenitems').textContent = count;

    var timeInSeconds = count * TIME_PER_ITEM; 
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    
    if (timeInSeconds <= 59) {
        document.getElementById('smcw_ppc_preparationtime').textContent = `About ${timeInSeconds}s`;
    } else {
        document.getElementById('smcw_ppc_preparationtime').textContent = `About ${minutes}m ${seconds}s`;
  }
}
