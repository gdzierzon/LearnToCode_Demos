

function calculateTotal()
{
    // 1. get user input
    let price = document.getElementById("priceInput").value;
    let quantity = document.getElementById("quantityInput").value;

    price = parseFloat(price);
    quantity = parseInt(quantity);

    // 2. calculate the order total
    let total = price * quantity;
    total = parseFloat(total.toFixed(2));

    // 3. display output
    let totalOutput = document.getElementById("totalOutput");
    totalOutput.value = total;
}



