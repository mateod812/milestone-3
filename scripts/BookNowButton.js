let selectedButton = null; // Variable to track the currently selected button

function attach_book_now_button() {
    const buttons = Array.from(document.getElementsByClassName('book_button'));

    if (selectedButton) {
        const previouslySelected = buttons.find(button => button.dataset.id === selectedButton.dataset.id);
        if (previouslySelected) {
            previouslySelected.textContent = "Selected";
            previouslySelected.style.backgroundColor = "white";
        }
    }

    for (let button of buttons) {
        button.addEventListener('click', function(event) {
            book_now(event, buttons);
        });
    }
}

function book_now(event, buttons) {
    const buttonClicked = event.target;
    const car_ID = buttonClicked.dataset.id;

    for (let button of buttons) {
        button.textContent = "Book Now";
        button.style.backgroundColor = "brown";
    }

    buttonClicked.textContent = "Selected";
    buttonClicked.style.backgroundColor = "#333";

    selectedButton = buttonClicked;
    carList.bookCar(car_ID);
}
