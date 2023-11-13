
document.addEventListener("DOMContentLoaded", () => {

    displayProducts(products);
})

function displayProducts(products) {

    const productsContainer = document.querySelector("#content")
    // clear all elements
    productsContainer.innerHTML = "";

    products.forEach(product => {

        // create a div for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("product") ;
        productDiv.id = "product-" + product.productId ;
        // add product to the container
        productsContainer.appendChild(productDiv);

        // create the product info div 
        const productInfoDiv = document.createElement("div");
        productDiv.appendChild(productInfoDiv);
        
        // add product header
        const productHeader = document.createElement("h4")
        productHeader.innerText = product.name;
        productInfoDiv.appendChild(productHeader);

        // create the image div (image and price)
        const imageRow = document.createElement("div");
        imageRow.classList.add("photo")
        productInfoDiv.appendChild(imageRow)
        // add product image
        const img = document.createElement("img");
        img.src = "images/products/" + product.imageUrl
        imageRow.appendChild(img)
        // add price
        const price = document.createElement("h4");
        price.classList.add("price")
        price.innerText = `$${product.price}`
        imageRow.appendChild(price)

        // add description container
        const descriptionRow = document.createElement("div");
        productInfoDiv.appendChild(descriptionRow);
        //add description pargraph
        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.innerText = product.description;
        descriptionRow.appendChild(descriptionParagraph);

        // add cart button div
        const cartButtonDiv = document.createElement("div");
        cartButtonDiv.classList.add("add-button")
        productDiv.appendChild(cartButtonDiv);
        // add button
        const cartButton = document.createElement("button");
        cartButton.classList.add("btn");
        cartButton.classList.add("btn-success");
        cartButton.innerText = "Add to Cart";
        cartButtonDiv.appendChild(cartButton)

    });
}
