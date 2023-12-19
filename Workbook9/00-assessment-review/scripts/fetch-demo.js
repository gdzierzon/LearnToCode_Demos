
const url = "http://localhost:3000/api/products/14"
const product = {
    id: 14,
    title: "Chocolate milk",
    price: 3.29
}

fetch(url, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
        "Content-type": "application/json"
    }
})
.then(response => {
    if(response.status >= 200) console.log("success");
})
.catch(error => {
    console.log(error)
})


document.querySelector(".col-12") // this returns ONLY the first match
document.querySelectorAll(".col-12") // this returs ALL matches
document.getElementsByClassName("col-12")