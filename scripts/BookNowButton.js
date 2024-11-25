// import carList from './Vehicle.js';
const buttons = document.getElementsByClassName('book_button');

for (let button of buttons) {
    button.addEventListener('click', function(event) {
        book_now(event);
    });
}


function book_now(event) {
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