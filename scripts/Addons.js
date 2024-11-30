let addonOptions = [];

const addonPackages = []


//Data stucture for addons to reduce headacke
//id is nessesary for anything that needs to be serialised (basically everything)
class addonPackage {
    constructor(name, desc, cost) {
        this.id = addonPackages.length;
        this.name = name;
        this.desc = desc;
        this.cost = cost;
        addonPackages.push(this);
    }
}


const gps = new addonPackage(
    "GPS Navigation System",
    "Get turn-by-turn directions and avoid getting lost during your trip.",
    10
)
const css = new addonPackage(
    "Child Safety Seat",
    "Ensure safety for your child with a properly installed car seat.",
    15
)

const wh = new addonPackage(
    "WiFi Hotspot",
    "Stay connected on the go with a portable WiFi hotspot.",
    12
)
const rr = new addonPackage(
    "Roof Rack",
    "Carry additional luggage, skis, or equipment with a roof rack.",
    8
)




function onAddonPress(id) {
    //was the button previously pressed
    let pressed = cart.hasAddon(id);
    let pk = addonPackages[id];
    let button = document.getElementById("addon_button_" + id);

    if (!pressed) {
        cart.addAddon(id);
        button.innerHTML = "Selected";
        button.style.color = "white"; // Change text color to black
        button.style.backgroundColor = "#333";
    } else {
        cart.removeAddon(id);
        button.textContent = "Select";
        button.style.backgroundColor = "brown";
        button.style.color = "White"; // Change text color to black
    }
    cart.save();
    create_summary_list();
}

function makeAddonLists() {
    for (id in addonPackages) {
        let pk = addonPackages[id];
        //was the button previously pressed
        pressed = cart.hasAddon(id);

        //create div
        let div = document.createElement("div");
        div.setAttribute("class", "addon_option");
        div.setAttribute("id", "addon_" + pk.id);//to differentiate

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
        span.setAttribute("class", "addon_cost");
        span.innerHTML = "$" + pk.cost + "/day";
        p2.appendChild(span);

        div.appendChild(p2);

        let button = document.createElement("button");
        button.setAttribute("onclick", "onAddonPress(" + id + ")");
        button.setAttribute("id", "addon_button_" + id);
        button.innerHTML = "Select";

        if (pressed) {
            //should allready be pressed
            button.innerHTML = "Selected";
            button.style.color = "White"; // Change text color to black
            button.style.backgroundColor = "#333";
        }

        div.appendChild(button);

        document.getElementById("addons_options").appendChild(div);
    }
}

/*
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all buttons with data-addon attribute
    document.querySelectorAll("button[data-addon]").forEach(button => {
        button.addEventListener("click", () => addon_buttons(button));
    });
});

function addon_buttons(button) {
    let option = button.getAttribute("data-addon");
    let cost = button.getAttribute("data-cost");

    let fuckMeMan = [];


    fuckMeMan.push(option,cost,2);
    if (!addonOptions.includes(option)) {
        addonOptions.push(option);
        add_Car_Summary(fuckMeMan);
        button.textContent = "Selected";
        button.style.color = "black"; // Change text color to black
        button.style.backgroundColor = "white";
    } else {
        remove_car_option(fuckMeMan); 
        button.textContent = "Select";
        button.style.backgroundColor = "#4CAF50";
        button.style.color = "White"; // Change text color to black
        addonOptions = addonOptions.filter(item => (item !== option));
    }
}*/
/*

                    <!-- GPS Navigation -->
                    <div class="addon_option">
                        <h3>GPS Navigation System</h3>
                        <p>Get turn-by-turn directions and avoid getting lost during your trip.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$10/day</span></p>
                        <button data-addon="GPS Navigation System" data-cost="10">Add</button>
                    </div>

                    <!-- Child Safety Seat -->
                    <div class="addon_option">
                        <h3>Child Safety Seat</h3>
                        <p>Ensure safety for your child with a properly installed car seat.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$15/day</span></p>
                        <button data-addon="Child Safety Seat" data-cost="15">Add</button>
                    </div>

                    <!-- Additional Driver -->
                    <div class="addon_option">
                        <h3>Additional Driver</h3>
                        <p>Add an extra driver to share the driving responsibilities.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$20/day</span></p>
                        <button data-addon="Additional Driver" data-cost="20">Add</button>
                    </div>

                    <!-- WiFi Hotspot -->
                    <div class="addon_option">
                        <h3>WiFi Hotspot</h3>
                        <p>Stay connected on the go with a portable WiFi hotspot.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$12/day</span></p>
                        <button data-addon="WiFi Hotspot" data-cost="12">Add</button>
                    </div>

                    <!-- Roof Rack -->
                    <div class="addon_option">
                        <h3>Roof Rack</h3>
                        <p>Carry additional luggage, skis, or equipment with a roof rack.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$8/day</span></p>
                        <button data-addon="Roof Rack" data-cost="8">Add</button>
                    </div>

                    <!-- Ski Rack -->
                    <div class="addon_option">
                        <h3>Ski Rack</h3>
                        <p>Transport your skis securely with a dedicated ski rack.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$10/day</span></p>
                        <button data-addon="Ski Rack" data-cost="10">Add</button>
                    </div>

                    <!-- Bike Rack -->
                    <div class="addon_option">
                        <h3>Bike Rack</h3>
                        <p>Take your bike along for the ride with a convenient bike rack.</p>
                        <p><strong>Cost:</strong> <span class="addon_cost">$7/day</span></p>
                        <button data-addon="Bike Rack" data-cost="7">Add</button>
                    </div>

*/