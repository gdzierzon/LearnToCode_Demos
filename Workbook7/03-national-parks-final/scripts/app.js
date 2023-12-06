document.addEventListener("DOMContentLoaded", () => {

    loadData();

    // fetch("http://localhost:3000/Mountains ")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.table(data)

    //         const mountains = data.map( m => {
    //             return {
    //                 name: m.Name,
    //                 elevation: m.Elevation,
    //                 effort: m.Effort,
    //                 img: m.Img,
    //                 desc: m.Desc,
    //                 coords: {
    //                     lat: m.Coords.Lat,
    //                     lng: m.Coords.Lng
    //                 }
    //             }
    //         })

    //         console.table(mountains)

    //         displayMountains(mountains)
    //     })

})

async function loadData() {
    let response = await fetch("http://localhost:3000/Mountains ")
    console.log(response);
    const data = await response.json()
    console.table(data)

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

    console.table(mountains)

    displayMountains(mountains)


}

function displayMountains(mountains)
{
    const ul = document.getElementById("mountains")

    mountains.forEach(moutain => {
        
        const li = document.createElement("li")
        li.innerText = moutain.name
        ul.appendChild(li)
    });

}