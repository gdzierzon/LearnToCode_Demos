let products = []
const apiProductsUrl = "http://localhost:3000/products"


document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById("category-select");
    const minimumPrice = document.getElementById("min-price");
    const maximumPrice = document.getElementById("max-price");
    const colorSelect = document.getElementById("color-select");

    categorySelect.addEventListener("change", filterProducts)
    minimumPrice.addEventListener("change", filterProducts)
    maximumPrice.addEventListener("change", filterProducts)
    colorSelect.addEventListener("change", filterProducts)

    fetch(apiProductsUrl).then(response => response.json())
                         .then(products => {
                             displayProducts(products);   
                         })

    
})

function filterProducts() {
    const category = document.getElementById("category-select").value
    const minimumPrice = document.getElementById("min-price").value;
    const maximumPrice = document.getElementById("max-price").value;
    const color = document.getElementById("color-select").value;

    document.getElementById("min-price-display").innerText = minimumPrice
    document.getElementById("max-price-display").innerText = maximumPrice

    // pattern for the URL and QueryString I need to build
    //http://localhost:3000/products?category=Electronics&price_gte=100&price_lte=500&color=Black

    const params = []
    if(category != "Show All") params.push("category="+ encodeURIComponent(category))
    if(minimumPrice > 0) params.push(`price_gte=${minimumPrice}`)
    if(maximumPrice < 1500) params.push(`price_lte=${maximumPrice}`)
    if(color != "Show All") params.push(`color=${color}`)

    let queryString = `?${params.join("&")}`

    fetch(apiProductsUrl + queryString).then(response => response.json())
                                        .then(products => {
                                            displayProducts(products);   
                                        })
  

    displayProducts(filteredProducts);
}

function displayProducts(products) {

    const productsContainer = document.querySelector("#content")
    // clear all elements
    productsContainer.innerHTML = "";

    products.forEach(product => {

        displayProduct(product, productsContainer)
        
    });
}

function displayProduct(product, parentDiv) {
    // create a div for each product
    const productDiv = document.createElement("div");
    productDiv.classList.add("product") ;
    productDiv.id = "product-" + product.productId ;
    // add product to the container
    parentDiv.appendChild(productDiv);

    addProductHeader(product, productDiv);
    addImageRow(product, productDiv);
    addDescription(product, productDiv);
    addCartButton(product, productDiv);
}

function addProductHeader(product, productDiv) {
    

    // create the product info div 
    const productInfoDiv = document.createElement("div");
    productDiv.appendChild(productInfoDiv);

    // add product header
    const productHeader = document.createElement("h4")
    productHeader.innerText = product.name;
    productInfoDiv.appendChild(productHeader);
}

function addImageRow(product, parent) {
    // create the image div (image and price)
    const imageRow = document.createElement("div");
    imageRow.classList.add("photo")
    parent.appendChild(imageRow)

    // add product image
    const img = document.createElement("img");
    img.src = "images/products/" + product.imageUrl
    imageRow.appendChild(img)

    // add price
    const price = document.createElement("h4");
    price.classList.add("price")
    price.innerText = `$${product.price}`
    imageRow.appendChild(price)
}

function addDescription(product, parent) {
    // add description container
    const descriptionRow = document.createElement("div");
    parent.appendChild(descriptionRow);
    //add description pargraph
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = product.description;
    descriptionRow.appendChild(descriptionParagraph);
}

function addCartButton(product, parent) {

    // add cart button div
    const cartButtonDiv = document.createElement("div");
    cartButtonDiv.classList.add("add-button")
    parent.appendChild(cartButtonDiv);
    // add button
    const cartButton = document.createElement("button");
    cartButton.classList.add("btn");
    cartButton.classList.add("btn-success");
    cartButton.innerText = "Add to Cart";
    cartButtonDiv.appendChild(cartButton)
}
