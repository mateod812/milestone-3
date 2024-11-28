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

function renderAllCars() {
    carList.renderAll();
}

function saveCart() {
    document.cookie = cart.save();
}
function loadCart() {
    cart.load(document.cookie);
}

