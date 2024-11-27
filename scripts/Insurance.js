let insuranceOptions = [];
let buttonArray = [];



document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons with data-insurance attribute
    document.querySelectorAll("button[data-insurance]").forEach(button => {
        button.addEventListener("click", () => insurance_buttons(button));
    });
});

function insurance_buttons(button) {
    let option = button.getAttribute("data-insurance");
    let cost = button.getAttribute("data-cost");

    let fuckMeMan = [];


    fuckMeMan.push(option,cost);
    if (!insuranceOptions.includes(option)) {
        insuranceOptions.push(option);
        add_Car_Summary(fuckMeMan);
        button.textContent = "Selected";
        button.style.color = "black"; // Change text color to black
        button.style.backgroundColor = "white";
    } else {
        remove_car_option(fuckMeMan); 
        button.textContent = "Select";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "White"; // Change text color to black
        insuranceOptions = insuranceOptions.filter(item => (item !== option));
    }
}