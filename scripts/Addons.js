let addonOptions = [];



document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons with data-addon attribute
    document.querySelectorAll("button[data-addon]").forEach(button => {
        button.addEventListener("click", () => addon_buttons(button));
    });
});

function addon_buttons(button) {
    let option = button.getAttribute("data-addon");
    let cost = button.getAttribute("data-cost");

    let fuckMeMan = [];


    fuckMeMan.push(option,cost,2);
    if (!addonOptions.includes(option)) {
        addonOptions.push(option);
        add_Car_Summary(fuckMeMan);
        button.textContent = "Selected";
        button.style.color = "black"; // Change text color to black
        button.style.backgroundColor = "white";
    } else {
        remove_car_option(fuckMeMan); 
        button.textContent = "Select";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "White"; // Change text color to black
        addonOptions = addonOptions.filter(item => (item !== option));
    }
}