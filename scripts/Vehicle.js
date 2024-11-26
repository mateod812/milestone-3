// JS enum
const VehicleTypes = {
    TRUCK: 0,
    SEDAN: 1,
    MID_SIZE_SUV: 2,
    FULL_SIZE_SUV: 3,
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

        if (array[6] == "yes") {
            this.bluetooth = true;
        } else {
            this.bluetooth = false;
        }

        if (array[7] == "yes") {
            this.ac = true;
        } else {
            this.ac = false;
        }

        if (array[8] == "yes") {
            this.cruise = true;
        } else {
            this.cruise = false;
        }

        if (array[9] == "yes") {
            this.carplay = true;
        } else {
            this.carplay = false;
        }

        this.isRented = false;
        this.image = array[10];
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




