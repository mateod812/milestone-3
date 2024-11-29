let filterState = {
    price: null, 
    vehicleType: null, 
    minSeats: 2 ,
    budget : 200
};


function preApplyfilters() {
    const surveyResult = JSON.parse(sessionStorage.getItem("surveyResult"));
    if  (surveyResult != null) {

        if (surveyResult.carType == "Sedan") {
            filterState.vehicleType = "sedan"
        } else if (surveyResult.carType == "Van") {
            filterState.vehicleType = "truck"
        } else if (surveyResult.carType == "Truck") {
            filterState.vehicleType = "truck"
        } else if (surveyResult.carType == "full_SUV") {
            filterState.vehicleType = "large_SUV"
        } else if (surveyResult.carType == "mid_SUV") {
            filterState.vehicleType = "mid_size_SUV"
        }
        
        if(surveyResult.passengers == "1-2") {
            filterState.minSeats = 2;
        } else if (surveyResult.passengers == "4-5") {
            filterState.minSeats = 4;
        }else if (surveyResult.passengers == "6-8") {
            filterState.minSeats = 6;
        }
        
        
        
        if(surveyResult.budget == "Less than $50") {
            filterState.budget = 50;
        } else if (surveyResult.budget == "$50 - $100") {
            filterState.budget = 100;
        }else if (surveyResult.budget == "$101 - $150") {
            filterState.budget = 150;
        }else if (surveyResult.budget == "$151 - $200") {
            filterState.budget = 200;
        }
        sessionStorage.setItem("surveyResult", null);
    }

}




function priceDropdown() {
    document.getElementById("priceDropdown").classList.toggle("show");
}

function vehicleDropdown() {
    document.getElementById("vehicleDropdown").classList.toggle("show");
}

function seatsDropdown() {
    document.getElementById("seatsDropdown").classList.toggle("show");
}

function budgetDropdown() {
    document.getElementById("budgetDropdown").classList.toggle("show");
}

function filter_event_listener() {

    document.querySelectorAll('#vehicle_type_filters input[type="radio"]').forEach(type => {
        type.addEventListener('change', event => {
            filterState.vehicleType = event.target.id === "all_vehicles" ? null : event.target.id;
            
        });
    });
    
    // Event listener for price radio buttons
    document.querySelectorAll('#price_filters input[type="radio"]').forEach(price => {
        price.addEventListener('change', event => {
            filterState.price = event.target.id;
        });
    });
    
    // Event listener for seats slider
    const slider = document.getElementById('seats_slider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', event => {
        document.getElementById('sliderValue').textContent = `${event.target.value} # of seats`;
        filterState.minSeats = parseInt(event.target.value);
    });
    
    const slider2 = document.getElementById('budget_slider');
    const budgetValue = document.getElementById('budgetValue');
    budgetValue.textContent = `$${filterState.budget} per day`;
    slider2.addEventListener('input', event => {
        document.getElementById('budgetValue').textContent = `$${event.target.value} per day`;
        filterState.budget = parseInt(event.target.value);
    });

    // "Apply Filters" button functionality
    document.getElementById('applyFiltersButton').addEventListener('click', () => {
        carList.applyFilters(filterState);
        console.log("dodes this fucking run")
    });

    
}
document.getElementById('resetFiltersButton').addEventListener('click', () => {
    filterState.price = null;
    filterState.vehicleType = null;
    filterState.minSeats = 2;
    filterState.budget = 200;
    create_filters(filters);
    carList.applyFilters(filterState);
    // filter_event_listener();
})



function create_price_filter_label() {
    const priceCont = document.getElementById("price_filters");
    priceCont.innerHTML = '';
    
    const priceLabelLow = document.createElement('label');
    priceLabelLow.setAttribute('for', "low_to_high");

    let priceInput = document.createElement('input');
    priceInput.type = 'radio';
    priceInput.id = "low_to_high";
    priceInput.name = "price_filter";


    if (filterState.price === "low_to_high") {
        priceInput.checked = true;
    }

    priceLabelLow.appendChild(priceInput);

    
    let priceText = document.createTextNode("Low to High");
    priceLabelLow.appendChild(priceText);

    
    priceCont.appendChild(priceLabelLow);
    
    const priceLabelHigh = document.createElement('label');
    priceLabelHigh.setAttribute('for', "high_to_low");
    
    priceInput = document.createElement('input');
    priceInput.type = 'radio';
    priceInput.id = "high_to_low";
    priceInput.name = "price_filter";

    if (filterState.price === "high_to_low") {
        priceInput.checked = true;
    }

    priceLabelHigh.appendChild(priceInput);
    
    priceText = document.createTextNode("High to Low");
    priceLabelHigh.appendChild(priceText);
    
    priceCont.appendChild(priceLabelHigh);
}






function createVehicleTypeFilters(filters) {
   
    
    const container = document.getElementById("vehicle_type_filters");
    
    container.innerHTML = ''; 
    
    filters.forEach((filter, index) => {
        const label = document.createElement('label');
        label.setAttribute('for', filter.id);
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = filter.id;
        input.name = 'vehicle_type_filters';
        input.value = filter.value;
        
        if (filterState.vehicleType !== null) {
            if (filterState.vehicleType  == filter.id) {
                input.checked = true;
            }
        } else {
            if (filter.id == "all_vehicles") {
                input.checked = true;
            }
        }
        
        label.appendChild(input);
        
        const text = document.createTextNode(` ${filter.label}`);
        label.appendChild(text);
        
        container.appendChild(label);

    });
}



function create_seat_filter() {
    const container = document.getElementById("seatsDropdown");
    container.innerHTML = '';
    const label = document.createElement('label');
    label.setAttribute('for', "seats_slider");

    const input = document.createElement('input');
    input.type = 'range';
    input.min = "2";
    input.max = "8";
    input.value = filterState.minSeats;
    input.id = "seats_slider"

    const span = document.createElement('span');
    span.id = "sliderValue";
    span.textContent = `${input.value} # of seats `;

    container.appendChild(input);
    container.appendChild(span);
}

function create_budget_filter() {
    const container = document.getElementById("budgetDropdown");
    container.innerHTML = ''; 

    const label = document.createElement('label');
    label.setAttribute('for', "budget_slider");

    const input = document.createElement('input');
    input.type = 'range';
    input.min = "0";
    input.max = "300";
    input.value = filterState.budget;
    input.id = "budget_slider"

    const span = document.createElement('span');
    span.id = "budgetValue";
    span.textContent = `$${input.value} per day`;
    console.log(span.textContent)

    container.appendChild(input);
    container.appendChild(span);

}

function create_filter_sliders() {
    create_seat_filter() 
    create_budget_filter()
}



function create_filters(filters) {
    create_price_filter_label();
    createVehicleTypeFilters(filters);
    create_filter_sliders();
    preApplyfilters();
    filter_event_listener();

}




