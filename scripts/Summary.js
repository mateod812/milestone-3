let summaryList = [];


function add_Car_Summary(carToAdd) {
    console.log(carToAdd);
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
    if (vid > 0) {
        const sumItem = document.createElement("h4");
        let element = carList.fromId(vid);
        sumItem.textContent = `${element.year} ${element.make} ${element.model} ---------- $${element.price}/day`;
        vehicleDiv.appendChild(sumItem);
        totalperDay += parseInt(element.price);
    }
    /**
     * generating insurance stuff
     * 
     */
    for (let i in cart.insurance) {
        if (i > 0) {
            let hr = document.createElement("hr");
            listOneDiv.appendChild(hr);
        }
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
        d1.appendChild(sumItem)
        d1.appendChild(price)
        
        listOneDiv.appendChild(d1);
    }
    /**
     * generating addon stuff
     * 
     */
    for (let i in cart.addons) {
        if (i > 0) {
            let hr = document.createElement("hr");
            listTwoDiv.appendChild(hr);
        }
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


    /*
    for (let i = 0; i < summaryList.length; i++) {
        let element = summaryList[i];
        const sumItem = document.createElement("h4");

        if (element instanceof Vehicle) {
            sumItem.textContent = `${element.year} ${element.make} ${element.model} ---------- $${element.price}/day`;
            vehicleDiv.appendChild(sumItem);
            totalperDay += parseInt(element.price);
        } else {
            
            const type  = summaryList[i][2];

            sumItem.textContent = summaryList[i][0];

            if (type == 1) {
                listOneDiv.appendChild(sumItem);
            } else if (type == 2) {
          //      listTwoDiv.appendChild(sumItem);
            }

            totalperDay += parseInt(summaryList[i][1]);
        }
    }*/

    // Append the three divs to the main container
    container.appendChild(vehicleDiv);
    container.appendChild(listOneDiv);
    container.appendChild(listTwoDiv);

    // Update the total value
    const containerTotal = document.getElementById("total_value");
    containerTotal.textContent = `$${totalperDay} per Day`;
}
