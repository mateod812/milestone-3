function moveToInsurance() {
    var image = document.getElementById("progress_car");
    var vehicleDiv = document.getElementById("vehicle_scroll");
    var insuranceDiv = document.getElementById("insurance_scroll");
    var addonsDiv = document.getElementById("addons_scroll");
    vehicleDiv.style.display = "none";
    addonsDiv.style.display = "none";
    insuranceDiv.style.display = "inline-block";
    image.classList = "move_insurance";
}

function moveToAddons() {
    var image = document.getElementById("progress_car");
    var vehicleDiv = document.getElementById("vehicle_scroll");
    var insuranceDiv = document.getElementById("insurance_scroll");
    var addonsDiv = document.getElementById("addons_scroll");
    vehicleDiv.style.display = "none";
    addonsDiv.style.display = "inline-block";
    insuranceDiv.style.display = "none";
    image.classList = "move_addons";
}

function moveToVehicles() {
    var image = document.getElementById("progress_car");
    var vehicleDiv = document.getElementById("vehicle_scroll");
    var insuranceDiv = document.getElementById("insurance_scroll");
    var addonsDiv = document.getElementById("addons_scroll");
    vehicleDiv.style.display = "inline-block";
    addonsDiv.style.display = "none";
    insuranceDiv.style.display = "none";
    image.classList = "move_vehicles";
}
