// Use for setting values on scroll-margin-top for certain sections of homepage so that the top content won't go underneath the sticky header
var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('welcome_section').scrollIntoView();
}

var scroll_to_tourist_destination_section_button = document.getElementById("scroll_to_tourist_destination_section_button");
scroll_to_tourist_destination_section_button.onclick = function() {
    document.getElementById('tourist_destination_section').scrollIntoView();
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

var jigsaw_puzzle_play_button = document.getElementById("jigsaw_puzzle_play_button");
jigsaw_puzzle_play_button.onclick = function() {
    window.location.href = "jigsaw_puzzle.html";
}

var word_hunt_play_button = document.getElementById("word_hunt_play_button");
word_hunt_play_button.onclick = function() {
    window.location.href = "word_hunt.html";
}

factSlide();
function factSlide() {
    const slides = document.querySelectorAll('.rfdc_slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 10000);

    function nextSlide() {
        const prevSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;

        hideAllSlides();
        slides[currentSlide].classList.add('active');
    }

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
    }
}

// Checkout window
initializeCheckoutWindow();
function initializeCheckoutWindow() {
    var shop_modal_checkout_window = document.getElementById("shop_modal_checkout_window");
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
                shop_modal_checkout_window.classList.remove("close");
                shop_modal_checkout_window.style.display = "flex";
                shop_modal_purchased_order_window.style.display = "none";
                shop_modal_purchased_order_window.classList.remove("close");
                body.style.overflow = "auto";
                inputReset();
                contentReset();
                orderButtonDisabler();
            }, 100);
        }
    });
}

// Subtotal, item, and preparation time counter
displayOrderDetails();
function displayOrderDetails() {
    // Get all the input number and checkbox elements
    const quantity = document.querySelectorAll('.smcw_card_order_chosenquantity');
    const checkboxes = document.querySelectorAll('.smcw_card_checkbox');
    const PRICE_PER_ITEM = 15;
    const TIME_PER_ITEM = 15;

    // Add event listeners to each input number and checkbox
    quantity.forEach(number => {
        number.addEventListener('input', updateTotal);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', updateTotal);
    });

    // Update the total value whenever an input number or checkbox is changed
    function updateTotal() {
        let count = 0;
        quantity.forEach((number, index) => {
            if (checkboxes[index].checked) {
                count += Number(number.value);
            }
        });
        document.getElementById('smcw_ppc_subtotal').textContent = "₱" + count * PRICE_PER_ITEM;
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
}

toggleCardBackgroundColor();
function toggleCardBackgroundColor() {
    const productCards = document.querySelectorAll('.smcw_card');

    const originalBgColors = [];
    productCards.forEach(card => {
        originalBgColors.push(getComputedStyle(card).backgroundColor);
        const checkbox = card.querySelector('.smcw_card_checkbox');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                card.style.backgroundColor = 'rgb(240, 240, 240)';
            } else {
                card.style.backgroundColor = '';
            }
        });
    });

    var shop_modal = document.getElementById("shop_modal");
    shop_modal.addEventListener("click", (event) => {
        if (event.target === shop_modal) {
            productCards.forEach((card, index) => {
                card.style.backgroundColor = originalBgColors[index];
            });

            paymentOptionCards.forEach(card => {
                card.classList.remove('selected');
            });
        }
    });

    const paymentOptionCards = document.querySelectorAll('.smcw_pc_card');
    const radios = document.querySelectorAll('.radio');
    radios.forEach(radio => {
        radio.addEventListener('click', function () {
            // Remove the 'selected' class from all smcw_pc_card elements
            paymentOptionCards.forEach(card => {
                card.classList.remove('selected');
            });

            // Add the 'selected' class to the parent smcw_pc_card element of the clicked radio button
            const card = this.closest('.smcw_pc_card');
            card.classList.add('selected');
        });
    });
}

updateCheckboxesAndQuantitiesState();
function updateCheckboxesAndQuantitiesState() {
    // Define the initial quantity value for each drink
    let bukoPandanQuantity = 40;
    let coffeeQuantity = 40;
    let mangoQuantity = 40;
    let strawberryQuantity = 40;

    // Get the necessary DOM elements
    const bukoPandanAvailableQuantity = document.getElementById("buko_pandan_availablequantity");
    const bukoPandanChosenQuantity = document.getElementById("buko_pandan_chosenquantity");
    const bukoPandanCheckbox = document.querySelector("input[drink_name='Buko Pandan Jelly Drink']");
    const coffeeAvailableQuantity = document.getElementById("coffee_availablequantity");
    const coffeeChosenQuantity = document.getElementById("coffee_chosenquantity");
    const coffeeCheckbox = document.querySelector("input[drink_name='Coffee Jelly Drink']");
    const mangoAvailableQuantity = document.getElementById("mango_availablequantity");
    const mangoChosenQuantity = document.getElementById("mango_chosenquantity");
    const mangoCheckbox = document.querySelector("input[drink_name='Mango Jelly Drink']");
    const strawberryAvailableQuantity = document.getElementById("strawberry_availablequantity");
    const strawberryChosenQuantity = document.getElementById("strawberry_chosenquantity");
    const strawberryCheckbox = document.querySelector("input[drink_name='Strawberry Jelly Drink']");
    const smcwPayNowButton = document.getElementById("smcw_ppc_confirm_order_button");

    // Update the initial values of the DOM elements
    bukoPandanAvailableQuantity.textContent = bukoPandanQuantity;
    bukoPandanChosenQuantity.max = bukoPandanQuantity;
    coffeeAvailableQuantity.textContent = coffeeQuantity;
    coffeeChosenQuantity.max = coffeeQuantity;
    mangoAvailableQuantity.textContent = mangoQuantity;
    mangoChosenQuantity.max = mangoQuantity;
    strawberryAvailableQuantity.textContent = strawberryQuantity;
    strawberryChosenQuantity.max = strawberryQuantity;

    // Add an event listener to the "Pay Now" button
    smcwPayNowButton.addEventListener("click", () => {
        // Update the quantity value for Buko Pandan Jelly Drink
        bukoPandanQuantity -= bukoPandanChosenQuantity.value;
        coffeeQuantity -= coffeeChosenQuantity.value;
        mangoQuantity -= mangoChosenQuantity.value;
        strawberryQuantity -= strawberryChosenQuantity.value;

        // Disable the checkbox and input field if the quantity reaches 0
        if (bukoPandanQuantity <= 0) {
            bukoPandanQuantity = 0;
            bukoPandanCheckbox.disabled = true;
            bukoPandanChosenQuantity.disabled = true;
        }

        if (coffeeQuantity <= 0) {
            coffeeQuantity = 0;
            coffeeCheckbox.disabled = true;
            coffeeChosenQuantity.disabled = true;
        }

        if (mangoQuantity <= 0) {
            mangoQuantity = 0;
            mangoCheckbox.disabled = true;
            mangoChosenQuantity.disabled = true;
        }

        if (strawberryQuantity <= 0) {
            strawberryQuantity = 0;
            strawberryCheckbox.disabled = true;
            strawberryChosenQuantity.disabled = true;
        }

        // Update the available quantity and max value of the input field
        bukoPandanAvailableQuantity.textContent = bukoPandanQuantity;
        bukoPandanChosenQuantity.max = bukoPandanQuantity;
        coffeeAvailableQuantity.textContent = coffeeQuantity;
        coffeeChosenQuantity.max = coffeeQuantity;
        mangoAvailableQuantity.textContent = mangoQuantity;
        mangoChosenQuantity.max = mangoQuantity;
        strawberryAvailableQuantity.textContent = strawberryQuantity;
        strawberryChosenQuantity.max = strawberryQuantity;
    });
}


// Order confirmation window
initializeOrderConfirmationWindow();
function initializeOrderConfirmationWindow() {
    var smcw_ppc_confirm_order_button = document.getElementById("smcw_ppc_confirm_order_button");
    var body = document.querySelector("body");

    smcw_ppc_confirm_order_button.onclick = function() {
        generateOrderReceiptCode();
        shop_modal_checkout_window.classList.add("close");
        setTimeout(function() {
            shop_modal_checkout_window.style.display = "none";
        }, 500);
    
        shop_modal_purchased_order_window.style.display = "flex";
    
        setTimeout(function() {
            shop_modal_purchased_order_window.classList.add("open");
        }, 500);
    
        body.style.overflow = "hidden";
    
        setTimeout(function() {
            inputReset();
            contentReset();
            orderButtonDisabler();
        }, 500);
    }
}

// Display order details in the preview section in real-time
const checkboxes = document.querySelectorAll('.smcw_card_checkbox');
const quantityInputs = document.querySelectorAll('.smcw_card_order_chosenquantity');
const orderDetails = document.querySelectorAll('.smpow_odc_ow_order_details');

function updateOrderDetails(index) {
    if (checkboxes[index].checked) {
        const name = checkboxes[index].getAttribute('drink_name');
        const quantity = quantityInputs[index].value;
        orderDetails[index].textContent = `${name} x ${quantity} (12oz)`;
    } else {
        orderDetails[index].textContent = '';
    }
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        updateOrderDetails(index);
    });
});

quantityInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        updateOrderDetails(index);
    });
});

// Display text based on chosen payment method
paymentMethodEventListener();
function paymentMethodEventListener() {
    const paymentMethod = document.querySelectorAll('input[type="radio"][name="payment_method"]');
    const chosenPaymentMethod = document.getElementById('smpow_odc_ow_payment_method');

    paymentMethod.forEach(radio => {
        radio.addEventListener('change', () => {
            const payment_method = radio.value;
            let text;
            switch (payment_method) {
                case 'Physical Cash':
                    text = 'Physical Cash';
                    break;
                case 'Credit/Debit Card':
                    text = 'Credit/Debit Card';
                    break;
                case 'GCash':
                    text = 'GCash';
                    break;
                case 'Maya':
                    text = 'Maya';
                    break;
                case 'Payment Center':
                    text = 'Payment Center';
                    break;
                default:
                    text = '';
                    break;
            }
            chosenPaymentMethod.textContent = text;
        });
    });
}

// Generate subtotal
calculateSubtotal();
function calculateSubtotal() {
    const quantity = document.querySelectorAll('.smcw_card_order_chosenquantity');
    const checkboxes = document.querySelectorAll('.smcw_card_checkbox');
    const PRICE_PER_ITEM = 15;

    quantity.forEach(number => {
        number.addEventListener('input', updateTotal);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', updateTotal);
    });

    function updateTotal() {
        let count = 0;
        quantity.forEach((number, index) => {
            if (checkboxes[index].checked) {
                count += Number(number.value);
            }
        });
        document.getElementById('smpow_odc_ow_total').textContent = "₱" + count * PRICE_PER_ITEM;
    }
}

// Generate order receipt code based on date and time
function generateOrderReceiptCode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    const orderReceiptCode = `${year}${month}${day}_${hours}${minutes}${seconds}`;

    document.getElementById('smpow_odc_ow_order_receipt_code').textContent = orderReceiptCode;
}

// Reset user input from checkboxes, radio buttons, and other related stuff
function inputReset() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const numberInputs = document.querySelectorAll('input[type="number"]');

    checkboxes.forEach(checkbox => checkbox.checked = false);
    radioButtons.forEach(radioButton => radioButton.checked = false);
    numberInputs.forEach(numberInput => numberInput.value = 0);
}

function contentReset() {
    const originalContent = "...";
    const subtotal = document.getElementById('smcw_ppc_subtotal');
    const itemQuantity = document.getElementById('smcw_ppc_totalchosenitems');
    const preparationTime = document.getElementById('smcw_ppc_preparationtime');

    subtotal.textContent = originalContent;
    itemQuantity.textContent = originalContent;
    preparationTime.textContent = originalContent;
}

orderButtonEnabler();
function orderButtonEnabler() {
    const checkboxList = document.querySelectorAll('.smcw_card_checkbox');
    const numberList = document.querySelectorAll('.smcw_card_order_chosenquantity');
    const radioList = document.querySelectorAll('.radio');
    const submitButton = document.querySelector('#smcw_ppc_confirm_order_button');

    function checkValidity() {
        let checkboxChecked = false;
        let totalValue = 0;
        let radioSelected = false;

        // Check if at least one checkbox is checked
        for (let i = 0; i < checkboxList.length; i++) {
            if (checkboxList[i].checked) {
                checkboxChecked = true;
                break;
            }
        }

        // Check if total value is at least 1
        for (let i = 0; i < numberList.length; i++) {
            totalValue += Number(numberList[i].value);
        }

        // Check if at least one radio button is selected
        for (let i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                radioSelected = true;
                break;
            }
        }

        // Enable the submit button if all conditions are met
        if (checkboxChecked && totalValue >= 1 && radioSelected) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Check validity on checkbox click, number input, and radio button click
    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].addEventListener('click', checkValidity);
    }

    for (let i = 0; i < numberList.length; i++) {
        numberList[i].addEventListener('input', checkValidity);
    }

    for (let i = 0; i < radioList.length; i++) {
        radioList[i].addEventListener('click', checkValidity);
    }

    checkValidity();
}

function orderButtonDisabler() {
    const submitButton = document.querySelector('#smcw_ppc_confirm_order_button');

    submitButton.disabled = true;
}

window.onbeforeunload = function() {
    inputReset();
    contentReset();
    orderButtonDisabler();
};
