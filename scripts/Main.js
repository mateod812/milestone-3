const carList = new VehicleInventory();



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


carList.renderAll();