var carList;
var cart;
var startPickr;
var endPickr;
//Date Selector Configuration values
CalendarConfig = {
    enableTime: true,
    altInput: true,
    altFormat: "M j, Y, h:iK",
    minuteIncrement: 30,
    position: "auto center",

    minTime: "9:00",
    maxTime: "17:30",
    defaultHour: 9,
    defaultMinute: 0,
    minDate: "today",
}

function loadMain() {
    if (!cart) {
        cart = new Cart();
        loadCart();
    }
}

function loadHomePage() {
    loadMain();
    if (cart.getStartDate()) {
        document.getElementById("start_date").value = cart.getStartDate();
    }

    if (cart.getEndDate()) {
        document.getElementById("end_date").value = cart.getEndDate();
    }   

    //Initialize Date Picker with config settings.
   // flatpickr("input[type=datetime-local]", CalendarConfig);

    startPickr = new flatpickr("input[id=start_date]", CalendarConfig);
    endPickr = new flatpickr("input[id=end_date]", CalendarConfig);
    startPickr.set("onClose", setMinDate);
    endPickr.set("onClose", setMaxDate);
    if (cart.getStartDate()) {
        startPickr.value = cart.getStartDate();
    }
    if (cart.getEndDate()) {
        endPickr.value = cart.getEndDate();
    }
}

function goToCheckout() {
    cart.save();
    if (/*cart.getAddress() &&*/ cart.getStartDate() && cart.getEndDate() && cart.getVehicleID() >= 0) {
        window.location.replace("./checkout.html");
    }
}

function loadCheckOut() {
    loadMain();
    loadVehicles()
    if (!cart.getAddress()) {
        //    window.location.replace("./home.html");
    }
    if (!cart.getStartDate()) {
        window.location.replace("./home.html");
    }
    if (!cart.getEndDate()) {
        window.location.replace("./home.html");
    }
    if (cart.getVehicleID() < 0) {
        window.location.replace("./index.html");
    }
    var form = document.getElementById("payment_form");
    form.addEventListener('submit', payNowButton);
    setCheckOutSummary()
}

function findVehicleButtion() {
    saveDates();
    if (/*cart.getAddress() &&*/ cart.getStartDate() && cart.getEndDate()) {
        window.location.replace("./index.html");
    }
}

function loadVehicles() {
    carList = new VehicleInventory();

    carList.addSedans(new Vehicle(civicArray));
    carList.addSedans(new Vehicle(corollaArray));
    carList.addSedans(new Vehicle(jettaArray));
    carList.addSedans(new Vehicle(altimaArray));

    carList.addTrucks(new Vehicle(F150Array));
    carList.addTrucks(new Vehicle(ramArray));
    carList.addTrucks(new Vehicle(cargoArray));
    carList.addTrucks(new Vehicle(silveradoArray));
    carList.addTrucks(new Vehicle(tundraArray));


    carList.addMidSUV(new Vehicle(rav4Array));
    carList.addMidSUV(new Vehicle(crvArray));
    carList.addMidSUV(new Vehicle(rogueArray));
    carList.addMidSUV(new Vehicle(foresterArray));


    carList.addFullSUV(new Vehicle(expeditionArray));
    carList.addFullSUV(new Vehicle(tahoeArray));
    carList.addFullSUV(new Vehicle(sequoiaArray));
    carList.addFullSUV(new Vehicle(suburbanArray));




}

function loadVehicleInv() {
    loadMain();
    loadVehicles();

    if (!cart.getAddress()) {
        //    window.location.replace("./home.html");
    }
    if (!cart.getStartDate()) {
        window.location.replace("./home.html");
    }
    if (!cart.getEndDate()) {
        window.location.replace("./home.html");
    }

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
    endPickr.set("minDate", startPickr.selectedDates[0].getTime() + 1 * 8.64e+7);
}
function setMaxDate() {
    startPickr.set("maxDate", endPickr.selectedDates[0].getTime() - 1 * 8.64e+7);
}

function saveCart() {
    cart.save();
}
function loadCart() {
    if (sessionStorage.getItem("vehicle"))
        cart.load();
}

