

class Cart {

    constructor() {
        this.start = null
        this.end = null
        this.vehicleID = -1
        this.insurance = []
        this.addons = []
    }

    clear() {
        this.start = null
        this.end = null
        this.vehicleID = -1
        this.insurance = []
        this.addons = []
    }

    setStartDate(date) {
        this.start = date;
        this.save();
    }
    setEndDate(date) {
        this.end = date;
        this.save();
    }
    setVehicle(vehicleID) {
        console.log(vehicleID + " vehicleAdded")
        this.vehicleID = vehicleID;
        this.save();
    }
    addInsurance(insuranceID) {
        this.insurance.push(insuranceID);
    }
    getVehicleID() {
        return this.vehicleID
    }

    hasInsurance(insuranceID) {
        for (const id of this.insurance) {
            if (id == insuranceID)
                return true;
        }
        return false;
    }

    removeInsurance(insuranceID) {
        this.insurance.splice(this.insurance.indexOf(insuranceID), 1);
        this.save();
    }
    addAddon(addonID) {
        this.addons.push(addonID);
    }
    hasAddon(addonID) {
        for (const id of this.addons) {
            if (id == addonID)
                return true;
        }
        return false;
    }
    removeAddon(addonID) {
        this.addons.splice(this.addons.indexOf(addonID), 1);
        this.save();
    }

    save() {
        sessionStorage.setItem("start", this.start);
        sessionStorage.setItem("end", this.end);
        sessionStorage.setItem("vehicle", this.vehicleID);
        let s = "";
        for (let a in this.addons) {
            s += this.addons[a] + "*"
        }
        sessionStorage.setItem("addons", s);
        let s2 = "";
        for (let a in this.insurance) {
            s2 += this.insurance[a] + "*"
        }
        sessionStorage.setItem("insurance", s2);
    }

    load() {
        this.start = sessionStorage.getItem("start")
        this.end = sessionStorage.getItem("end")
        this.vehicleID = parseInt(sessionStorage.getItem("vehicle"))

        let s1 = sessionStorage.getItem("insurance")
        let end = s1.indexOf("*");
        let last = 0;
        while (end < s1.length && end > 0) {
            this.addInsurance(parseInt(s1.substring(last, end)))
            console.log(s1.substring(last, end) + "  " + s1)
            last = end + 1;
            end = s1.indexOf("*", end + 1)
        }

        let s2 = sessionStorage.getItem("addons")
        let end2 = s1.indexOf("*");
        let last2 = 0;
        while (end2 < s2.length && end2 > 0) {
            this.addAddon(parseInt(s2.substring(last2, end2)))
            console.log(s2.substring(last2, end2) + "  " + s2)
            last2 = end2 + 1;
            end2 = s2.indexOf("*", end2 + 1)
        }
    }

}