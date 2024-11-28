

function loadCheckOut() {
    console.log("LOADED1" + cart.vehicleID + "")
    loadCart();
    console.log("LOADED" + cart.vehicleID + "")
    vehicle = carList.fromId(cart.getVehicleID());
    document.getElementById("vname").textContent = vehicle.getMake() + "  " + vehicle.getModel()
}
