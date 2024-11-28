let insuranceOptions = [];

const insurancePackages = []


//Data stucture for insurance package to reduce headacke
//insurancePackages[package.id] = package
//id is nessesary for anything that needs to be serialised (basically everything)
class InsurancePackage {
    constructor(name, desc, cost) {
        this.id = insurancePackages.length;
        this.name = name;
        this.desc = desc;
        this.cost = cost;
        insurancePackages.push(this);
    }
}


const cdw = new InsurancePackage(
    "Collision Damage Waiver (CDW)",
    "Reduces your financial responsibility for damage to the rental car in case of an accident or collision. Deductibles may apply.",
    20
)
const ldw = new InsurancePackage(
    "Loss Damage Waiver (LDW)",
    "Waives your liability for damage or theft of the rental vehicle, including loss of use fees.",
    25
)
const rap = new InsurancePackage(
    "Roadside Assistance Protection",
    "Covers roadside emergencies like towing, flat tires, battery jumps, or lockouts.",
    7
)
const taw = new InsurancePackage(
    "Tire and Windshield Protection",
    "Covers specific damage to tires, wheels, and windshields.",
    8
)

function onPress(id) {
    //was the button previously pressed
    console.log(id + " clicked")
    let pressed = cart.hasInsurance(id);
    let pk = insurancePackages[id];
    let button = document.getElementById("insurance_button_" + id);

    if (!pressed) {
        cart.addInsurance(id);
        button.innerHTML = "Selected";
        button.style.color = "black"; // Change text color to black
        button.style.backgroundColor = "white";
    } else {
        cart.removeInsurance(id);
        button.textContent = "Select";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "White"; // Change text color to black
    }
    console.log(cart.insurance);
    create_summary_list();
}

function makePackageLists() {
    let iOptions = document.getElementById("insurance_options")
    for (const pk of insurancePackages) {
        const id = pk.id;
        console.log(pk.name + " " + pk.id)
        //was the button previously pressed
        pressed = cart.hasInsurance(id);

        //create div
        let div = document.createElement("div");
        div.setAttribute("class", "insurance_option");
        div.setAttribute("id", "insurance_" + pk.id);//to differentiate

        //add header
        let h3 = document.createElement("h3");
        div.appendChild(h3);
        h3.innerHTML = pk.name;

        //add paragraph desc
        let p = document.createElement("p");
        p.innerHTML = pk.desc;
        div.appendChild(p);

        let p2 = document.createElement("p");
        let strong = document.createElement("strong");
        strong.innerHTML = "Cost:";
        p2.appendChild(strong);

        let span = document.createElement("span");
        span.setAttribute("class", "insurance_cost");
        span.innerHTML = "$" + pk.cost + "/day";
        p2.appendChild(span);

        div.appendChild(p2);

        let button = document.createElement("button");
        button.setAttribute("onclick", "onPress(" + id + ")");
        button.setAttribute("id", "insurance_button_" + id);
        button.innerHTML = "Select";

        if (pressed) {
            //should allready be pressed
            button.innerHTML = "Selected";
            button.style.color = "black"; // Change text color to black
            button.style.backgroundColor = "white";
        }
        
        div.appendChild(button);

        iOptions.appendChild(div);
    }
}

/*
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons with data-insurance attribute
    document.querySelectorAll("button[data-insurance]").forEach(button => {
        button.addEventListener("click", () => insurance_buttons(button));
    });
});*/

function insurance_buttons(button) {
    let option = button.getAttribute("data-insurance");
    let cost = button.getAttribute("data-cost");

    let fuckMeMan = [];

    fuckMeMan.push(option,cost,1);
    if (!insuranceOptions.includes(option)) {
        insuranceOptions.push(option);
        add_Car_Summary(fuckMeMan);
        button.textContent = "Selected";
        button.style.color = "black"; // Change text color to black
        button.style.backgroundColor = "white";
    } else {
        remove_car_option(fuckMeMan); 
        button.textContent = "Select";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "White"; // Change text color to black
        insuranceOptions = insuranceOptions.filter(item => (item !== option));
    }
    cart.save();
}

/*
old

                    <!-- Collision Damage Waiver -->
                    <div class="insurance_option">
                        <h3>Collision Damage Waiver (CDW)</h3>
                        <p>Reduces your financial responsibility for damage to the rental car in case of an accident or collision. Deductibles may apply.</p>
                        <p><strong>Cost:</strong> <span class="insurance_cost">$20/day</span></p>
                        <button data-insurance="Collision Damage Waiver" data-cost="20">Select</button>
                    </div>

                    <!-- Loss Damage Waiver -->
                    <div class="insurance_option">
                        <h3>Loss Damage Waiver (LDW)</h3>
                        <p>Waives your liability for damage or theft of the rental vehicle, including loss of use fees.</p>
                        <p><strong>Cost:</strong> <span class="insurance_cost">$25/day</span></p>
                        <button data-insurance="Loss Damage Waiver" data-cost="25">Select</button>
                    </div>

                    <!-- Roadside Assistance Protection -->
                    <div class="insurance_option">
                        <h3>Roadside Assistance Protection</h3>
                        <p>Covers roadside emergencies like towing, flat tires, battery jumps, or lockouts.</p>
                        <p><strong>Cost:</strong> <span class="insurance_cost">$7/day</span></p>
                        <button data-insurance="Roadside Assistance Protection" data-cost="7">Select</button>
                    </div>

                    <!-- Tire and Windshield Protection -->
                    <div class="insurance_option">
                        <h3>Tire and Windshield Protection</h3>
                        <p>Covers specific damage to tires, wheels, and windshields.</p>
                        <p><strong>Cost:</strong> <span class="insurance_cost">$8/day</span></p>
                        <button data-insurance="Tire and Windshield Protection" data-cost="8">Select</button>
                    </div>
*/