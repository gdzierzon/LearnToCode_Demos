
document.addEventListener("DOMContentLoaded", () => {

    displayProducts(products);
})

function displayProducts(products) {

    // check if the browser supports templates
    if('content' in document.createElement('template')){
        const productsContainer = document.querySelector("#content")
        // clear all elements
        productsContainer.innerHTML = "";

        products.forEach(product => {
            addProduct(product, productsContainer);
    
       
        });
    }
}

function addProduct(product, parent) {
    const template = document.getElementById("product-template").content.cloneNode(true);
    template.getElementById("title").innerText = product.name;
    template.querySelector("img").src = "images/products/" + product.imageUrl
    template.querySelector(".price").innerText = `$${product.price}`
    template.querySelector("p").innerText = product.description;

    parent.appendChild(template)
}
