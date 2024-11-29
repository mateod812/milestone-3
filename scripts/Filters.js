let filterState = {
    price: null, 
    vehicleType: null, 
    minSeats: 2 ,
    budget : 200
};


function preApplyfilters() {
    const surveyResult = JSON.parse(sessionStorage.getItem("surveyResult"));

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
    }else if (surveyResult.passengers == "$101 - $150") {
        filterState.budget = 150;
    }else if (surveyResult.passengers == "$151 - $200") {
        filterState.budget = 200;
    }


    console.log(surveyResult);
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
    sliderValue.textContent = filterState.minSeats;
    slider.addEventListener('input', event => {
        document.getElementById('sliderValue').textContent = event.target.value;
        filterState.minSeats = parseInt(event.target.value);
    });
    
    const slider2 = document.getElementById('budget_slider');
    const budgetValue = document.getElementById('budgetValue');
    budgetValue.textContent = filterState.budget;
    slider2.addEventListener('input', event => {
        document.getElementById('budgetValue').textContent = event.target.value;
        filterState.budget = parseInt(event.target.value);
    });

    // "Apply Filters" button functionality
    document.getElementById('applyFiltersButton').addEventListener('click', () => {
        carList.applyFilters(filterState);
    });

}



function createVehicleTypeFilters(containerId, filters) {
    preApplyfilters();
    const container = document.getElementById(containerId);
    
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
        }
        
        label.appendChild(input);
        
        const text = document.createTextNode(` ${filter.label}`);
        label.appendChild(text);
        
        container.appendChild(label);

    });
}

// Example usage
const filters = [
    { id: 'all_vehicles', value: 'all', label: 'All Vehicles' },
    { id: 'sedan', value: 'sedan', label: 'Sedans' },
    { id: 'truck', value: 'truck', label: 'Trucks' },
    { id: 'mid_size_SUV', value: 'mid_size_SUV', label: 'Mid Sized SUV' },
    { id: 'large_SUV', value: 'large_SUV', label: 'Full Sized SUV' }
];


