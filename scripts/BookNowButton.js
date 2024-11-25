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
    carList.bookCar(car_ID)
}