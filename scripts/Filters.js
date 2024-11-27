let activePriceFilter = null; // Variable to track the active price filter

function apply_price_filters() {
    const price_checkbox = document.querySelectorAll('#price_filters input[type="radio"]');

    for (let price of price_checkbox) {
        price.addEventListener('change', function(event) {
            add_price_filter(event);
        });
    }

    function add_price_filter(event) {
        const boxChecked = event.target;
        const whichBox = boxChecked.id;

        if (boxChecked.checked) {
            activePriceFilter = whichBox; // Update the active price filter
            if (whichBox === "no_price_filter"){
                carList.renderAll();    
            }
            else if (whichBox === "low_to_high") {
                carList.sortCarsLowtoHigh();
            } else if (whichBox === "high_to_low") {
                carList.sortCarsHightoLow();
            }
        } else {
            activePriceFilter = null; // No active price filter
            carList.renderAll();
        }
        attach_book_now_button();
    }
}

const vehicle_type = document.querySelectorAll('#vehicle_type_filters input[type="radio"]');

for (let type of vehicle_type) {
    type.addEventListener('change', function(event) {
        add_vehicle_filter(event);
    });
}

function add_vehicle_filter(event) {
    const vehicle = event.target;
    const whichBox = vehicle.id;

    if (vehicle.checked) {
        if (whichBox === "sedan") {
            carList.filterSedans();
        } else if (whichBox === "truck") {
            carList.filterTrucks();
        } else if (whichBox === "all_vehicles") {
            carList.renderAll();
        }
    } else {
        carList.renderAll();
    }

    if (activePriceFilter === "low_to_high") {
        carList.sortCarsLowtoHigh();
    } else if (activePriceFilter === "high_to_low") {
        carList.sortCarsHightoLow();
    }

    attach_book_now_button();
}


const vehicle_option  = document.querySelectorAll('#vehicle_option_filters input[type="radio"]');

for (let option of vehicle_option) {
    price.addEventListener('change', function(event) {
        add_option_filter(event);
    });
}


function add_option_filter(event) {
    const vehicle = event.target;
}


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('seats_slider');
    const sliderValue = document.getElementById('sliderValue');
    sliderValue.textContent = 2;
    // Update the displayed value when the slider is moved
    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
        carList.filterMinSeats(slider.value);
    });
});
apply_price_filters();
