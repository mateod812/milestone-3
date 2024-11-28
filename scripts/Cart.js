

class Cart {

    constructor() {
        this.start = null
        this.end = null
        this.vehicle = null
        this.insurance = null
        this.addons = []
    }
    setStartDate(cart, date) {
        cart.start = date;
    }
    setEndDate(cart, date) {
        cart.end = date;
    }
    setVehicle(cart, vehicle) {
        cart.vehicle = vehicle;
    }
    setInsurance(cart, insurance) {
        cart.insurance = insurance;
    }
    addAddon(cart, addonID) {
        cart.addons.push(addonID);
    }
    removeAddon(cart, addonID) {
        cart.addons = cart.addons.filter((v) => !addonID == v);
    }

}