const carList = new VehicleInventory();

const cart = new Cart();

const civic = new Vehicle(civicArray);
const corolla = new Vehicle(corollaArray);
const jetta = new Vehicle(jettaArray);

carList.addSedans(civic);
carList.addSedans(corolla);
carList.addSedans(jetta);


const F150 = new Vehicle(F150Array);
const Ram1500 = new Vehicle(ramArray);

carList.addTrucks(F150);
carList.addTrucks(Ram1500);

function loadMain() {
    loadCart();
    carList.renderAll();
    attach_book_now_button();
}

function saveCart() {
    cart.save();
}
function loadCart() {
    if (sessionStorage.getItem("vehicle"))
        cart.load();
}

