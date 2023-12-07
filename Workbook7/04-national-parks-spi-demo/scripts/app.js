// declare my services
let mountainsService 

// declare controls / DOM elements
let mountainSelect
let mountainDisplayContainer


document.addEventListener("DOMContentLoaded", () => {
    // create the service(s)
    mountainsService = new MountainsService()

    // set the global variables
    mountainSelect = document.getElementById("mountainSelect")
    mountainDisplayContainer = document.getElementById("mountainDisplayContainer")

    // register events
    mountainSelect.addEventListener("change", filterMountain)

    // start loading data
    loadData()


})


async function loadData() {

    const mountains = await mountainsService.getAllMountains()

    mountains.forEach(mountain => {
        const option = new Option(mountain.name)
        mountainSelect.appendChild(option)
    })    
    
}

async function filterMountain() {
    const mountainName = mountainSelect.value

    const mountain  = await mountainsService.findByName(mountainName)

    displayMountain(mountain)

}


function displayMountain(mountain) {
    mountainDisplayContainer.innerHTML = ""

    const title = document.createElement("h1");
    title.innerText = mountain.name

    mountainDisplayContainer.appendChild(title)

}