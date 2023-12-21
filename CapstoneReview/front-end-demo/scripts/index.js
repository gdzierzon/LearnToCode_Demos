let userService

document.addEventListener("DOMContentLoaded", () => {
    userService = new UserService()
    sessionStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3MDMxODMxMTUsImV4cCI6MTcwMzI2OTUxNX0.cEeSF3PJzwmVy-lhwnaTUXphoD5bOur6lGZTGACztds"

    loadUsers()
   
})

function loadUsers() {
    userService.getAll()
                     .then(users => {
                        console.log(users);
                     })
}
