
document.addEventListener("DOMContentLoaded", () => {

    let loadButton = document.getElementById("loadButton")
    loadButton.addEventListener("click" , loadUsers)

    let userSelect = document.getElementById("userSelect")
    userSelect.addEventListener("change", displayUserInfo)

})

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
               .then(response => response.json())
               .then(users => {
                    console.log(users)

                    let userSelect = document.getElementById("userSelect")

                    users.forEach(user => {
                        let option = new Option(user.name, user.id)
                        userSelect.appendChild(option)
                    });
                })

}

function displayUserInfo() {

    let userSelect = document.getElementById("userSelect")
    let id = userSelect.value

    let url = `https://jsonplaceholder.typicode.com/users/${id}`


    let details = document.getElementById("details")
    details.innerHTML = ""

    fetch(url).then(response => response.json())
              .then(user => {
                // display the info

                let title = document.createElement("h1")
                title.innerText = user.name

                details.appendChild(title)
              })
}