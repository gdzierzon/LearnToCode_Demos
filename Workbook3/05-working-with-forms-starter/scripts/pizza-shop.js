
window.onload = function() {
    const orderButton = document.getElementById("orderButton");

    orderButton.onclick = orderButtonClicked;

}

function orderButtonClicked() {
    const order = {};

    // get the order header details
    order.email = document.getElementById("emailInput").value.trim();
    order.firstName = document.getElementById("firstNameInput").value.trim();
    order.orderDate = document.getElementById("orderDateInput").value;
    order.orderTime = document.getElementById("orderTimeInput").value;
    order.orderType = document.getElementById("orderTypeSelect").value;

    // get the pizza size
    const sizeSmallRadio = document.getElementById("sizeSmall");
    const sizeMediumRadio = document.getElementById("sizeMedium");
    const sizeLargeRadio = document.getElementById("sizeLarge");
    const sizeFamilyRadio = document.getElementById("sizeFamily");

    if (sizeSmallRadio.checked) {
        order.size = "Small";
        order.sizePrice = 9.99;
    } else if(sizeMediumRadio.checked) {
        order.size = "Medium";
        order.sizePrice = 11.99;
    } else if(sizeLargeRadio.checked) {
        order.size = "Large";
        order.sizePrice = 13.99;
    } else {
        order.size = "Family";
        order.sizePrice = 15.99;
    }

    // get selected toppings
    const toppingCheese = document.getElementById("toppingCheese");
    const toppingPepperoni = document.getElementById("toppingPepperoni");
    const toppingHam = document.getElementById("toppingHam");
    const toppingSausage = document.getElementById("toppingSausage");
    const toppingChicken = document.getElementById("toppingChicken");
    const toppingPineapple = document.getElementById("toppingPineapple");

    order.hasCheese = toppingCheese.checked;
    order.hasPepperoni = toppingPepperoni.checked;
    order.hasHam = toppingHam.checked;
    order.hasSausage = toppingSausage.checked;
    order.hasChicken = toppingChicken.checked;
    order.hasPineapple = toppingPineapple.checked;

    order.total = order.sizePrice;
    if(order.hasCheese) order.total += 1.00
    if(order.hasPepperoni) order.total += 1.00
    if(order.hasHam) order.total += 1.00
    if(order.hasSausage) order.total += 1.00
    if(order.hasChicken) order.total += 1.00
    if(order.hasPineapple) order.total += 1.00

    order.total = +order.total.toFixed(2);

    displayOrderDetails(order)
}

function displayOrderDetails(order) {
    document.getElementById("emailDisplay").innerText = order.email;
    document.getElementById("nameDisplay").innerText = order.firstName;
    document.getElementById("orderDateDisplay").innerText = order.orderDate + " " + order.orderTime;
    document.getElementById("orderTypeDisplay").innerText = order.orderType;
    document.getElementById("sizeDisplay").innerText = order.size;
    document.getElementById("sizePriceCell").innerText = order.sizePrice;
    document.getElementById("totalPriceDisplay").innerText = order.total;

    // show/hide rows

    // tradition if statement
    if(order.hasCheese) {
        document.getElementById("extraCheeseRow").style.display = "table-row";
    } else {
        document.getElementById("extraCheeseRow").style.display = "none";
    }
    
    // ternary opperator (? :) on multiple lines
    document.getElementById("pepperoniRow").style.display = order.hasPepperoni 
                                                                ? "table-row" 
                                                                : "none";
          
    // ternary opperator on same line
    document.getElementById("hamRow").style.display = order.hasHam ? "table-row" : "none";
    document.getElementById("sausageRow").style.display = order.hasSausage ? "table-row" : "none";
    document.getElementById("chickenRow").style.display = order.hasChicken ? "table-row" : "none";
    document.getElementById("pineappleRow").style.display = order.hasPineapple ? "table-row" : "none";


}