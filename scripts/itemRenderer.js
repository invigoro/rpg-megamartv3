function renderItems(data) {
        data.sort(compareItemCost)
        for (i = 0; i < data.length; i++) {
            let item = data[i];
            console.log(item);
            $("#container-row").append(`<div class='col-xl-3 col-lg-4 col-md-6 col-12'>
                <div class='h-100 py-3 px-1'>
                    <div class='h-100 py-2 px-3 border border-info rounded bg-light'>
                <p class='h3 text-muted'>${item.title}</p>
                <div class=text-secondary>
                <div class='row'>
                <div class='col'><p class='text-start'>Cost: ${item.cost} gp</p></div>
                <div class='col'><p class='text-end'>${item.quantity > 0 ? "Available: " + item.quantity : "<span color='red'>Out of stock!</span>"}</p></div>
                </div>
                <div style='height: 200px'><img class='rounded mx-auto d-block' style='max-width: 200px;max-height: 200px' src='${item.img}' onerror="this.onerror=null; this.src='./images/default.png'"></div>
                <p>${item.description}</p>
                </div>
                </div>
                </div>
            `);
        }
}



function compareItemCost(a, b) {
    if(a.cost < b.cost) {
        return 1;
    }
    else if(a.cost > b.cost) {return -1;}
    else return 0;
}