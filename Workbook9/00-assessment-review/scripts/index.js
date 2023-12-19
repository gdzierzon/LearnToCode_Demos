document.addEventListener("DOMContentLoaded", () => {

    let list = document.getElementsByTagName("li")

    for(let item of list)
    {
        console.log(item.innerText);
    }

    // let array = Array.from(list)

    let array = [...list]

    array.forEach(item => {
        console.log(item.innerText);

    })
})