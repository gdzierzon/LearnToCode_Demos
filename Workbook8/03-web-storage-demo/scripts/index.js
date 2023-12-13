
document.addEventListener("DOMContentLoaded", ()=> {
    const userName = document.getElementById("userName")
    const saveUserName = document.getElementById("saveUserName")
    const deleteUserName = document.getElementById("deleteUserName")

    const clearStorage = document.getElementById("clearStorage")

    saveUserName.addEventListener("click", () => {
        sessionStorage.userName = userName.value
        sessionStorage.category = "Candy"
        sessionStorage.sports = "NCAA > NBA"
        sessionStorage.user = {
            userName: "gdzierzon",
            firstName: "Gregor",
            lastName: "Dzierzon",
            token: "afdesap9fehwal;kfuyd"
        }
    })

    deleteUserName.addEventListener("click", () => {
        sessionStorage.removeItem("userName")
    })

    clearStorage.addEventListener("click", () => {
        sessionStorage.clear()
    })

})