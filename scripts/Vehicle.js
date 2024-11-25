// JS enum
const VehicleTypes =  {
    TRUCK: 0,
    SEDAN: 1,
    MID_SIZE_SUV: 2,
    FULL_SIZE_SUV: 3
};

//length of the Enum
const NUM_VEHICLE_TYPES = Object.keys(VehicleTypes).length;

class Vehicle {
    static car_id = 0; //every car needs an unique ID to know which button was pressed
    constructor(array) {
        this.year = array[0];
        this.make = array[1];
        this.model = array[2];
        this.numSeats = array[3];
        this.luggageSpace = array[4]; 
        this.price = array[5];

        if ( array[6] == "yes") {
            this.bluetooth = true;
        } else {
            this.bluetooth = false;
        }
        this.isRented = false;
        this.image = array[7];
        this.ID = Vehicle.car_id;
        Vehicle.car_id++;
    }

    getCarInfo() {
        return ` ${this.year} ${this.make} ${this.model} ${this.numSeats} ${this.isRented}`; 
    }

    rentCar() {
        this.isRented = true;
    }

    returnCar() {
        this.isRented = false;
    }

    isCarAvaiable() {
        return this.isRented;
    }
}


 class VehicleInventory {


    vehicleList = [];
    constructor(){
        this.createVehicleList();
    };



    //only way i found to create a 2d array dynamically, 
    //for if we add more Vehicle types
    createVehicleList() {
        for (let index = 0; index < NUM_VEHICLE_TYPES; index++) {
            this.vehicleList.push([]);
        }
    }

    getFirstSedan() {
        return this.vehicleList[VehicleTypes.SEDAN][0];
    }


    addSedans(sedan) {
        this.vehicleList[VehicleTypes.SEDAN].push(sedan);
    }
    
    printSedans() {
        for (let index = 0; index < this.vehicleList[VehicleTypes.SEDAN].length; index++) {
            const element = this.vehicleList[VehicleTypes.SEDAN][index];
            console.log(element);
        }
    }

    renderSedans() {
        const container = document.getElementById("vehicle_container");

        for (let i = 0; i < this.vehicleList[VehicleTypes.SEDAN].length; i++) {
            const car = this.vehicleList[VehicleTypes.SEDAN][i];

            const vehicleItem = document.createElement("div");
            vehicleItem.id = "vehicle_item"

            const img = document.createElement("img");
            img.src = car.image;
            img.alt =  "Vehicle Image";
            img.id = "vehicle_img";

            const name = document.createElement("h3");
            name.id = "vehicle_name";
            name.textContent = ` ${car.year} ${car.make} ${car.model}`;

            const button = document.createElement("button");
            button.className = "book_button";
            button.textContent = "Book Now";
            button.setAttribute("data-id",car.ID);

            const seats = document.createElement("img");
            seats.id = "seats_img";
            seats.src = "companyImages/car-seat.png";

            const num_seats = document.createElement("h1");
            num_seats.id = "num_seats";
            num_seats.textContent = `${car.numSeats}`;

            const luggage = document.createElement("img");
            luggage.id = "luggage_img";
            luggage.src = "companyImages/luggage.png";

            const num_luggage = document.createElement("h1");
            num_luggage.id = "num_luggage";
            num_luggage.textContent = `${car.luggageSpace}`;

            const price_cost = document.createElement("h1");
            price_cost.id = "price_cost";
            price_cost.textContent = `$${car.price}/day`;


            vehicleItem.appendChild(img);
            vehicleItem.appendChild(button);
            vehicleItem.appendChild(name);
            vehicleItem.appendChild(seats);
            vehicleItem.appendChild(num_seats);
            vehicleItem.appendChild(luggage);
            vehicleItem.appendChild(num_luggage);
            vehicleItem.appendChild(price_cost);

            container.appendChild(vehicleItem);
        }
    }

    bookCar(ID) {
        for (let i = 0; i < this.vehicleList.length; i++) {
            for (let j = 0; j < this.vehicleList[i].length; j++) {
                const car = this.vehicleList[i][j];
                if (car.ID == ID) {
                    car.isRented = true;
                    console.log(`${car.year} ${car.make} ${car.model} is now rented` );
                }
            }
            
        }
    }



}


civicArray = ["2024","Honda","Civic","5","4","98","yes","sedanImages/2024_Honda_Civic.jpg"];
corollaArray = ["2024","Toyota","Corolla","5","4","93","yes","sedanImages/2024_Toyota_Corolla.jpg"];
jettaArray = ["2024","Volkswagon","Jetta","5","5","99","yes","sedanImages/2024_Volkswagon_Jetta.jpg"];

const civic = new Vehicle(civicArray);
const corolla = new Vehicle(corollaArray);
const jetta = new Vehicle(jettaArray);

const carList = new VehicleInventory();
carList.addSedans(civic);
carList.addSedans(corolla);
carList.addSedans(jetta);

console.log(carList.getFirstSedan());
carList.renderSedans();



