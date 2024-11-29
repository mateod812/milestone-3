var carList;
var cart;

//Date Selector Configuration values
CalendarConfig = {
    enableTime: true,
    
    altInput: true,
    altFormat: "M j, Y, h:iK",

    minuteIncrement: 30,

    position: "auto center",
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
    flatpickr("input[type=datetime-local]", CalendarConfig);
}
function loadCheckOut() {
    loadMain();
    loadVehicles()
    setCheckOutSummary()
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
    console.log("saveDates()");
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

function openSurvey() {
    document.getElementById('surveyModal').style.display = 'block';
}

function closeSurvey() {
    document.getElementById('surveyModal').style.display = 'none';
}




// 
// window.onclick = function (event) {
//     const modal = document.getElementById('surveyModal');
//     if (event.target === modal) {
//         closeSurvey();
//     }
// }
