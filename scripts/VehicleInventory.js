class VehicleInventory {
    vehicleList = [];
    renderedCarList = [];
    constructor() {
        this.createVehicleList();
    }

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

    addTrucks(truck) {
        this.vehicleList[VehicleTypes.TRUCK].push(truck);
    }

    printSedans() {
        for (
            let index = 0;
            index < this.vehicleList[VehicleTypes.SEDAN].length;
            index++
        ) {
            const element = this.vehicleList[VehicleTypes.SEDAN][index];
            console.log(element);
        }
    }


    renderVehicles() {
        const container = document.getElementById("vehicle_container");
        container.innerHTML = '';

        for (let i = 0; i < this.renderedCarList.length; i++) {
            const car = this.renderedCarList[i];

            const vehicleItem = document.createElement("div");
            vehicleItem.id = "vehicle_item";

            const img = document.createElement("img");
            img.src = car.image;
            img.alt = "Vehicle Image";
            img.id = "vehicle_img";

            const name = document.createElement("h3");
            name.id = "vehicle_name";
            name.textContent = ` ${car.year} ${car.make} ${car.model}`;

            const button = document.createElement("button");
            button.className = "book_button";
            button.textContent = "Book Now";
            button.setAttribute("data-id", car.ID);

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

            const additional_features = document.createElement("h4");
            additional_features.id = "additional_features";
            additional_features.textContent = `Additional Features:`;

            const bluetooth = document.createElement("p");
            bluetooth.id = "bluetooth";
            if (car.bluetooth == true) {
                bluetooth.textContent = `This vehicle has bluetooth capabilities.`;
            }

            const ac = document.createElement("p");
            ac.id = "ac";
            if (car.ac == true) {
                ac.textContent = `This vehicle has air conditioning.`;
            }

            const cruise = document.createElement("p");
            cruise.id = "cruise";
            if (car.cruise == true) {
                cruise.textContent = `This vehicle has cruise control.`;
            }

            // weird sizing thing where if 1 vehicle has one of these elements and others don't it shifts the vehicle boxes up/down
            const carplay = document.createElement("p");
            carplay.id = "carplay";
            if (car.carplay == true) {
                carplay.textContent = `This vehicle has Apple Carplay`;
            }

            vehicleItem.appendChild(img);
            vehicleItem.appendChild(button);
            vehicleItem.appendChild(name);
            vehicleItem.appendChild(seats);
            vehicleItem.appendChild(num_seats);
            vehicleItem.appendChild(luggage);
            vehicleItem.appendChild(num_luggage);
            vehicleItem.appendChild(price_cost);
            vehicleItem.appendChild(additional_features);
            vehicleItem.appendChild(bluetooth);
            vehicleItem.appendChild(ac);
            vehicleItem.appendChild(cruise);
            vehicleItem.appendChild(carplay);

            container.appendChild(vehicleItem);
        }

    }

    renderAll() {
        const bigCarList = [];
        for (let i = 0; i < this.vehicleList.length; i++) {
            for (let j = 0; j < this.vehicleList[i].length; j++) {
                bigCarList.push(this.vehicleList[i][j]);
            }
        }
        this.renderedCarList = bigCarList;
        this.renderVehicles();

    }

    //Gets a car from ID, probably, idk how this works but ctr-c - ctrl-v go brrrrr
    fromId(ID) 
    {
        for (let i = 0; i < this.vehicleList.length; i++) {
            for (let j = 0; j < this.vehicleList[i].length; j++) {
                const car = this.vehicleList[i][j];
                if (car.ID == ID) {
                    return car
                }
            }
        }
    }

    bookCar(ID) {
        for (let i = 0; i < this.vehicleList.length; i++) {
            for (let j = 0; j < this.vehicleList[i].length; j++) {
                const car = this.vehicleList[i][j];
                if (car.ID == ID) {
                    console.log(`${car.year} ${car.make} ${car.model} is now rented`);
                    add_Car_Summary(car);
                    car.isRented = true;
                    cart.setVehicle(ID);
                }
            }
        }
    }

    sortCarsLowtoHigh() { 
        this.renderedCarList.sort((a,b) => a.price - b.price);
        this.renderVehicles();
    }
    sortCarsHightoLow() { 
        this.renderedCarList.sort((a,b) => b.price - a.price);
        this.renderVehicles();
    }

    filterTrucks() {
        this.renderedCarList = this.vehicleList[VehicleTypes.TRUCK];
        console.log(this.renderedCarList);
        this.renderVehicles();
    }

    filterSedans() {
        this.renderedCarList = this.vehicleList[VehicleTypes.SEDAN];
        console.log(this.renderedCarList);
        this.renderVehicles();
    }

    filterMinSeats(givenSeats) {
        const deepCopy = structuredClone(this.renderedCarList);
        this.renderedCarList = this.renderedCarList.filter(car => car.numSeats >= givenSeats);
        console.log(givenSeats);
        this.renderVehicles();
        this.renderedCarList = deepCopy;
    }
}
