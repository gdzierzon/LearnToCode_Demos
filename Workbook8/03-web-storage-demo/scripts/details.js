
document.addEventListener("DOMContentLoaded", ()=> {
    const userNameDiv = document.getElementById("userName")

    let userName = sessionStorage.userName

    if(userName)
    {
        userNameDiv.innerText = `Hello ${userName}`
    }
    else{
        userNameDiv.innerText = `Please log in`
    }

})