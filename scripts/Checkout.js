

function loadCheckOut() {
    console.log("LOADED")
    vehicle = carList.fromId(cart.vehicle);
    document.getElementById("vname").textContent = vehicle.getMake() + "  " + vehicle.getModel()
}

