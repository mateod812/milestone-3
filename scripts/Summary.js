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
    console.log(option[0]);
    create_summary_list();
}


function remove_other_cars() {
    summaryList = summaryList.filter(element => !(element instanceof Vehicle));
}



function create_summary_list() {
    let totalperDay = 0;
    const container = document.getElementById("summary_info_div");
    container.innerHTML = '';

    for (let i = 0; i < summaryList.length; i++) {
        let element = summaryList[i];
        
        const sumItem = document.createElement("h4");
        if (element instanceof Vehicle) {
            sumItem.textContent = `${element.year} ${element.make} ${element.model} ---------- $${element.price}/day`;
            totalperDay += parseInt(element.price);
        } else {
            element = summaryList[i][0];
            sumItem.textContent = element;
            totalperDay += parseInt(summaryList[i][1]);
        }
        
        sumItem.id = "summary_vehicle_current";
        const summary = document.getElementById("summary_info_div");
        summary.appendChild(sumItem);
    }
    const containerTotal = document.getElementById("total_value");
    containerTotal.textContent =`$${totalperDay} per Day`
}