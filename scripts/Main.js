var carList;
var cart;

function loadMain() {
    cart = new Cart();
    carList = new VehicleInventory();

    carList.addSedans(new Vehicle(civicArray));
    carList.addSedans(new Vehicle(corollaArray));
    carList.addSedans(new Vehicle(jettaArray));

    carList.addTrucks(new Vehicle(F150Array));
    carList.addTrucks(new Vehicle(ramArray));

    loadCart();
}

function loadHomePage() {
    loadMain();
}
function loadCheckOut() {
    loadMain();
    setCheckOutSummary()
}


function loadVehicleInv() {
    loadMain();


    carList.renderAll();

    attach_book_now_button();
    makePackageLists();
    makeAddonLists();
    create_summary_list();

}

function saveDates() {
    const start = document.getElementById("start_date");
    cart.setStartDate(start.value)
    const end = document.getElementById("end_date");
    cart.setEndDate(end.value)
}

function setMinDate() {
    const start = document.getElementById("start_date");
    const end = document.getElementById("end_date");
    end.setAttribute("min", start.value);
}
function setMaxDate() {
    const start = document.getElementById("start_date");
    const end = document.getElementById("end_date");
    start.setAttribute("max", end.value);
}

function saveCart() {
    cart.save();
}
function loadCart() {
    if (sessionStorage.getItem("vehicle"))
        cart.load();
}

