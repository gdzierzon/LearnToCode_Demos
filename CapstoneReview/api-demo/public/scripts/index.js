
document.addEventListener("DOMContentLoaded", async () => {
    const productsUl = document.getElementById("productsUl")

    const response = await fetch('/api/products')
    const products = await response.json()

    products.forEach(product => {
        const li = document.createElement("li")
        li.innerText = product.name

        productsUl.appendChild(li)
        
    });

})