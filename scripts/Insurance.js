const insuranceOptions = [];

document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons with data-insurance attribute
    document.querySelectorAll("button[data-insurance]").forEach(button => {
        button.addEventListener("click", () => insurance_buttons(button));
    });
});

function insurance_buttons(button) {
    const option = button.getAttribute("data-insurance");

    if (!insuranceOptions.includes(option)) {
        insuranceOptions.push(option);

        var optionName = document.createElement("h4");
            optionName.textContent = option;
            optionName.id = "summary_vehicle_current";


        var summary = document.getElementById("summary_div");
        summary.append(optionName);
    }
    button.textContent = "Selected";
    button.style.color = "black"; // Change text color to black

    button.style.backgroundColor = "white";
    console.log(insuranceOptions); 

}