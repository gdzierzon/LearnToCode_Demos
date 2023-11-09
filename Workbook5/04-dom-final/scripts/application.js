
document.addEventListener("DOMContentLoaded", () => {

    /*
    document.getElementById = 1 item by ID
    document.getElementsByClassName = all items with the specified class
    document.getElementsByTagName = all items with the specified tag
    */
    // const productDivs = document.getElementsByClassName("feature");

    /*
    document.querySelector = 1 Item that matches the filter
    document.querySelectorAll = all items that match the filter
    */
    const productDivs = document.querySelectorAll(".feature")

    // convert the HTMLCollection into an array
    // const products = Array.from(productDivs)
    const products = [...productDivs]

    products.forEach(product => {
        product.style.backgroundColor = "#eee";
    })

    const messageDiv = document.getElementById("messageDiv");
    messageDiv.innerText = "<button onclick='alert(\"hi\");'>Hello World</button>"
    messageDiv.classList.add("card");
    messageDiv.classList.add("p-2");
    // messageDiv.className = "card"
    // messageDiv.className = "p-2"

    // add the source of the image and the alt text
    const logo = document.querySelector("#logo")
    logo.src = "images/products/apron.jpg"
    logo.alt = "This is actually an apron not a logo"
})
