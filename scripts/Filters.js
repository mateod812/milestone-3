const filterState = {
    price: null, 
    vehicleType: null, 
    minSeats: 2, 
    budget: 150
};

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

// Event listener for vehicle type radio buttons
document.querySelectorAll('#vehicle_type_filters input[type="radio"]').forEach(type => {
    type.addEventListener('change', event => {
        filterState.vehicleType = event.target.id === "all_vehicles" ? null : event.target.id;
        
    });
});

// Event listener for price radio buttons
document.querySelectorAll('#price_filters input[type="radio"]').forEach(price => {
    price.addEventListener('change', event => {
        filterState.price = event.target.id;
        console.log(filterState.price);
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
    console.log(filterState);
});
