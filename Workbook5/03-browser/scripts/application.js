const sites = [
    {
        name: "Pluralsight",
        url: "https://www.pluralsight.com",
        buttonColor: "btn-warning"
    },
    {
        name: "Live Chat",
        url: "https://www.livechat.com",
        buttonColor: "btn-primary"
    },
    {
        name: "Typing.io",
        url: "https://typing.io",
        buttonColor: "btn-danger"
    },
    {
        name: "Phoenix Legit",
        url: "https://www.phoenixlegit.com",
        buttonColor: "btn-dark"
    },
    {
        name: "Human Benchmark",
        url: "https://humanbenchmark.com",
        buttonColor: "btn-outline-success"
    }
]


// older approach
// window.onload = function() {
//     const button = document.getElementById("button");

//     button.onclick = function(){
//         window.open("https://store.steampowered.com/")
//     }
// }


// modern approach
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("content");
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        window.open("https://store.steampowered.com/")
    })


    sites.forEach(site => {
        // add a button that opens the site in a new window
        const newButton = document.createElement("button");

        newButton.innerText = site.name;
        newButton.classList.add("btn");
        newButton.classList.add(site.buttonColor);

        newButton.addEventListener("click", () => {
            window.open(site.url)
        })

        main.appendChild(newButton);
    })
})

