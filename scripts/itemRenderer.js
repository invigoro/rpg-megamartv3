function renderItems(data) {
        data.sort(compareItemCost);
        dataIs = data.filter(item => item.visible && item.quantity > 0);
        for (i = 0; i < dataIs.length; i++) {
            let item = dataIs[i];
            console.log(item);
            $("#container-row-1").append(formatItem(item));
        }
        dataOoS = data.filter(item => item.visible && item.quantity <= 0);
        if(dataOoS.length > 0)
            $('#header-row-2').css("display", "block");
        for (i = 0; i < dataOoS.length; i++) {
            let item = dataOoS[i];
            console.log(item);
            $("#container-row-2").append(formatItem(item));
        }
}

function formatItem(item) {
    return `<div class='col-xl-3 col-lg-4 col-md-6 col-12'>
                <div class='h-100 py-3 px-1'>
                    <div class='h-100 py-2 px-3 border border-info rounded bg-light'>
                <p class='h3 text-muted'>${item.title}</p>
                <div class='text-secondary'>
                <p style='font-weight: 100; font-style: italic;'>${item.overview}</p>
                <div class='row'>
                ${item.quantity > 0 ? `<div class='col'><p class='text-start'>Cost: ${item.cost} gp</p></div>` : "" }
                <div class='col'><p class='text-end'>${item.quantity > 0 ? "Available: " + item.quantity : "<span class='text-danger text-bold'>Out of stock!</span>"}</p></div>
                </div>
                <div style='height: 200px'><img class='rounded mx-auto d-block' style='max-width: 200px;max-height: 200px' src='${item.img}' onerror="this.onerror=null; this.src='./images/default.png'"></div>
                <p>${item.description}</p>
                </div>
                </div>
                </div>
            `;
}



function compareItemCost(a, b) {
    let acost = 0;
    let bcost = 0;
    if(a.quantity > 0) acost = a.cost;
    if(b.quantity > 0) bcost = b.cost;
    if(acost < bcost) {
        return 1;
    }
    else if(acost > bcost) {return -1;}

    else return 0;
}