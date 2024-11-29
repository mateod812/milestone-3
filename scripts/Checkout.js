function setFirstName() {
    sessionStorage.setItem("first", document.getElementById("first_name").textContent)
}
function setLastName() {
    sessionStorage.setItem("last", document.getElementById("last_name").textContent)
}
function buttonAddonRemovePress(id) {
    document.getElementById("aoption_" + id).remove();
    cart.removeAddon(id);
}
function buttonInsuranceRemovePress(id) {
    document.getElementById("ioption_" + id).remove();
    cart.removeInsurance(id);
}

function payNowButton(event) {
    event.preventDefault();
    cart.clear();
    window.location.replace("./thankyou.html");
}

function setCheckOutSummary() {
    let total = 0;
    if (cart.getVehicleID() >= 0) {
        vehicle = carList.fromId(cart.getVehicleID());
        document.getElementById("vname").textContent = vehicle.getMake() + "  " + vehicle.getModel();
     //   document.getElementById("vcolor").textContent = "Color: " + vehicle.getColor();
        document.getElementById("vseats").textContent = vehicle.getNumSeats();
        document.getElementById("vcargo").textContent = vehicle.getLuggageSpace();
        document.getElementById("vaddress").textContent = cart.getAddress();
        document.getElementById("vsdate").textContent = cart.getStartDate();
        document.getElementById("vedate").textContent = cart.getEndDate();
        total = parseFloat(vehicle.getPrice());
        let Itemplate = document.getElementById("ioption");
        for (const id of cart.insurance) {

            let pk = insurancePackages[id];
            total += pk.cost
            document.getElementById("ioption_name").textContent = pk.name;
            document.getElementById("ioption_desc").textContent = pk.desc;
            document.getElementById("ioption_cost").textContent = pk.cost;
            document.getElementById("ioption_button").setAttribute("onclick", "buttonInsuranceRemovePress(" + id + ")");
            let info = document.createElement("div")
            info.setAttribute("id", "ioption_" + id);
            info.style.overflow = "hidden"
            info.style.marginTop = "1%"
            info.innerHTML = Itemplate.innerHTML;
            document.getElementById("ioptions").appendChild(info);
        }
        Itemplate.innerHTML = ''

        let Atemplate = document.getElementById("aoption");
        for (const id of cart.addons) {

            let pk = addonPackages[id];
            total += pk.cost
            document.getElementById("aoption_name").textContent = pk.name;
            document.getElementById("aoption_desc").textContent = pk.desc;
            document.getElementById("aoption_cost").textContent = pk.cost;
            document.getElementById("aoption_button").setAttribute("onclick", "buttonAddonRemovePress(" + id + ")");
            let info = document.createElement("div")
            info.setAttribute("id", "aoption_" + id);
            info.style.overflow = "hidden"
            info.style.marginTop = "1%"
            info.innerHTML = Atemplate.innerHTML;
            document.getElementById("aoptions").appendChild(info);
        }
        Atemplate.innerHTML = ''

    }
    if (sessionStorage.getItem("first")) {
        document.getElementById("first_name").textContent = sessionStorage.getItem("first");
    }
    if (sessionStorage.getItem("last")) {
        document.getElementById("last_name").textContent = sessionStorage.getItem("first");
    }
    let startdate = new Date(cart.getStartDate());
    let enddate = new Date(cart.getEndDate());
    let dif = Math.round((enddate.getTime() - startdate.getTime()) / (1000 * 3600 * 24));
    document.getElementById("subtotal").textContent = total * dif
    document.getElementById("daily_sub").textContent = total
    document.getElementById("days").textContent = dif
    document.getElementById("total").textContent = total * dif
    document.getElementById("total2").textContent = total * dif

}