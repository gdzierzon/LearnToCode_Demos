let mountainSelect
let mountainDisplayContainer
const baseUrlMountains = "http://localhost:3000/Mountains"


document.addEventListener("DOMContentLoaded", () => {

    // set the global variable on page load
    mountainSelect = document.getElementById("mountainSelect")
    mountainDisplayContainer = document.getElementById("mountainDisplayContainer")

    mountainSelect.addEventListener("change", filterMountain)

    console.log("before load")
    loadData();

    console.log("after load")


})


function loadDataOrig() {
    fetch(baseUrlMountains)
        .then(response => {

            return response.json()
        })
        .then(data => {
            // NOW I have access to the data

            const mountains = data.map( m => {
                return {
                    name: m.Name,
                    elevation: m.Elevation,
                    effort: m.Effort,
                    img: m.Img,
                    desc: m.Desc,
                    coords: {
                        lat: m.Coords.Lat,
                        lng: m.Coords.Lng
                    }
                }
            })

            loadSelect(mountains)
        })
    
}

function filterMountainOriginal() {
    const mountainName = mountainSelect.value
    const url = baseUrlMountains + `?Name=${mountainName}`

    
    fetch(url) // returns a promise
        .then((response) => { // callback function
            
            return response.json()

        }) // the response is THE WHOLE PACKAGE - response.json() UNPACKAGES the response - returns the body
        .then(body => {
            // the body is... an array with 1 mountain
            
            const mountains = body.map( m => {
                return {
                    name: m.Name,
                    elevation: m.Elevation,
                    effort: m.Effort,
                    img: m.Img,
                    desc: m.Desc,
                    coords: {
                        lat: m.Coords.Lat,
                        lng: m.Coords.Lng
                    }
                }
            })

            const mountain = mountains[0]
            displayMountain(mountain)
        })

}


async function loadData() {

    console.log("before fetch")
    const response = await fetch(baseUrlMountains)
    console.log("after fetch - before response.json()")
    const data = await response.json()
       
    console.log("after response.json()")
    // NOW I have access to the data
    const mountains = data.map( m => {
        return {
            name: m.Name,
            elevation: m.Elevation,
            effort: m.Effort,
            img: m.Img,
            desc: m.Desc,
            coords: {
                lat: m.Coords.Lat,
                lng: m.Coords.Lng
            }
        }
    })

    loadSelect(mountains)
       
    
}

async function filterMountain() {
    const mountainName = mountainSelect.value
    const url = baseUrlMountains + `?Name=${mountainName}`

    // the response is THE WHOLE PACKAGE - response.json() UNPACKAGES the response - returns the body
    let response = await fetch(url)
    let body = await response.json()
    
    // the body is... an array with 1 mountain    
    const mountains = body.map( m => {
        return {
            name: m.Name,
            elevation: m.Elevation,
            effort: m.Effort,
            img: m.Img,
            desc: m.Desc,
            coords: {
                lat: m.Coords.Lat,
                lng: m.Coords.Lng
            }
        }
    })

    const mountain = mountains[0]
    displayMountain(mountain)

}

function loadSelect(mountains)
{

    mountains.forEach(mountain => {
        const option = new Option(mountain.name)
        mountainSelect.appendChild(option)
    });

}

function displayMountain(mountain) {
    mountainDisplayContainer.innerHTML = ""

    const title = document.createElement("h1");
    title.innerText = mountain.name

    mountainDisplayContainer.appendChild(title)

}