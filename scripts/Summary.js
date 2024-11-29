let summaryList = [];


function add_Car_Summary(carToAdd) {
    if (!summaryList.includes(carToAdd)) {
        if (carToAdd instanceof Vehicle) {
            remove_other_cars();

            let sumListCopy = [];

            for (let i = 0; i < summaryList.length; i++) {
                const element = summaryList[i];
                sumListCopy[i+1] = element;
            }
            sumListCopy[0] = carToAdd;
            summaryList = sumListCopy;
        } else {

            summaryList.push(carToAdd);
        }
        create_summary_list();
    }
}


function remove_car_option(option) {
    summaryList = summaryList.filter(item => item[0] !== option[0]);
    create_summary_list(); 
}


function remove_other_cars() {
    summaryList = summaryList.filter(element => !(element instanceof Vehicle));
}



function create_summary_list() {

    let totalperDay = 0;

    // Clear the main container
    const container = document.getElementById("summary_info_div");
    container.innerHTML = '';
    

    // Create three separate divs
    const vehicleDiv = document.createElement("div");
    vehicleDiv.id = "vehicle_div";

    const listOneDiv = document.createElement("div");
    listOneDiv.id = "insurance_div";

    const listTwoDiv = document.createElement("div");
    listTwoDiv.id = "addon_div";

    //vehicle stuff
    let vid = cart.getVehicleID();
    if (vid >= 0) {
        const sumItem = document.createElement("h4");
        let element = carList.fromId(vid);
        sumItem.style.width = "80%";
        sumItem.style.float = "left";
        sumItem.textContent = `${element.year} ${element.make} ${element.model}`;
        vehicleDiv.appendChild(sumItem);

        const price = document.createElement("h4");
        price.style.width = "20%"
        price.style.float = "left"
        price.textContent = "$" + element.price;
        vehicleDiv.appendChild(price);
    } else {
        const sumItem = document.createElement("h4");
        sumItem.style.width = "80%"
        sumItem.style.float = "left"
        sumItem.textContent = "No Vehicle Selected";
        vehicleDiv.appendChild(sumItem);
    }

    //spacer between sections
    let hr = document.createElement("hr");
    vehicleDiv.appendChild(hr);

    /**
     * generating insurance stuff
     * 
     */
    if(cart.insurance.length > 0) {
        for (let i in cart.insurance) {
            let pk = insurancePackages[cart.insurance[i]]
            const d1 = document.createElement("div")
         //   d1.style.border = "solid 4px rgba(0,0,0,.3)";
            d1.style.overflow = "hidden"
    
            const sumItem = document.createElement("h4");
            sumItem.style.width = "80%"
            sumItem.style.float = "left"
            sumItem.textContent = pk.name
    
            const price = document.createElement("h4");
            price.style.width = "20%"
            price.style.float = "left"
            price.textContent = "$" + pk.cost
    
            totalperDay += pk.cost;
            d1.appendChild(sumItem);
            d1.appendChild(price);
            
            listOneDiv.appendChild(d1);
        }
    }
    else {
            const sumItem = document.createElement("h4");
            sumItem.style.width = "80%"
            sumItem.style.float = "left"
            sumItem.textContent = "None";
            listOneDiv.appendChild(sumItem);
    }

    

    //spacer between sections
    hr = document.createElement("hr");
    listOneDiv.appendChild(hr);

    

    /**
     * generating addon stuff
     * 
     */
    if(cart.addons.length > 0) {
        for (let i in cart.addons) {
            let pk = addonPackages[cart.addons[i]]
            const d1 = document.createElement("div")
            //   d1.style.border = "solid 4px rgba(0,0,0,.3)";
            d1.style.overflow = "hidden"
    
            const sumItem = document.createElement("h4");
            sumItem.style.width = "80%"
            sumItem.style.float = "left"
            sumItem.textContent = pk.name
    
            const price = document.createElement("h4");
            price.style.width = "20%"
            price.style.float = "left"
            price.textContent = "$" + pk.cost
    
            totalperDay += pk.cost;
            d1.appendChild(sumItem)
            d1.appendChild(price)
    
            listTwoDiv.appendChild(d1);
        }
    }
    else {
        const sumItem = document.createElement("h4");
        sumItem.style.width = "80%"
        sumItem.style.float = "left"
        sumItem.textContent = "None";
        listTwoDiv.appendChild(sumItem);
    }

    


    //spacer between sections
    hr = document.createElement("hr");
    listTwoDiv.appendChild(hr);

    // Append the three divs to the main container
    container.appendChild(vehicleDiv);
    container.appendChild(listOneDiv);
    container.appendChild(listTwoDiv);

    // Update the total value
    const containerTotal = document.getElementById("total_value");
    containerTotal.textContent = `$${totalperDay} per Day`;
}
