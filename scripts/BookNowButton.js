attach_book_now_button();

function attach_book_now_button() {   
    const buttons = Array.from(document.getElementsByClassName('book_button'));
    for (let button of buttons) {
        button.addEventListener('click', function(event) {
            book_now(event,buttons);
        });
    }
}


function book_now(event, buttons) {
    const buttonClicked = event.target;
    const car_ID = buttonClicked.dataset.id;
    for (button of buttons) {
        button.textContent="Book Now";
        button.style.backgroundColor="#DAD4B5";
    }
    buttonClicked.textContent="Selected";
    buttonClicked.style.backgroundColor="white";
    carList.bookCar(car_ID)
}