// const price_checkbox = document.getElementById('price_filters');
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
        if (whichBox == "low_to_high") {
            carList.sortCarsLowtoHigh();
        } else if (whichBox == "high_to_low") {
            carList.sortCarsHightoLow();
        }
    }
    else {
        carList.renderAll()
    }
    attach_book_now_button();
}

