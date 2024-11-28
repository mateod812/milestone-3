

class Cart {

    constructor() {
        this.start = null
        this.end = null
        this.vehicle = 1
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

    save() {
        let s = this.start + "&" + this.setEndDate + "&" + this.vehicle + "&" + this.insurance + "&"
        for (a in this.addons) {
            s += a.addonID + "*"
        }
    }
    load(string) {
        if (string.length <= 0) {
            return;
        }
        let last = 0;
        let end = string.indexOf("&")
        let s1 = string.substr(last, end - 1)
        this.setStartDate(s1)
        last = end + 1;
        string = string.substr(last, string.length)
        
        end = string.indexOf("&")
        s1 = string.substr(last, end - 1)
        this.setEndDate(s1)
        last = end + 1;
        string = string.substr(last, string.length)

        end = string.indexOf("&")
        s1 = string.substr(last, end - 1)
        this.setVehicle(parseInt(s1))
        last = end + 1;
        string = string.substr(last, string.length)

        end = string.indexOf("&")
        s1 = string.substr(last, end - 1)
        this.setInsurance(parseInt(s1))
        last = end + 1;
        string = string.substr(last, string.length)

        while (string.indexOf("*") < string.length) {
            end = string.indexOf("*")
            s1 = string.substr(last, end - 1)
            this.addAddon(parseInt(s1))
            last = end + 1;
            string = string.substr(last, string.length)
        }
    }

}