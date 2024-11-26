const civic = new Vehicle(civicArray);
const corolla = new Vehicle(corollaArray);
const jetta = new Vehicle(jettaArray);


const carList = new VehicleInventory();
carList.addSedans(civic);
carList.addSedans(corolla);
carList.addSedans(jetta);

carList.renderAll();