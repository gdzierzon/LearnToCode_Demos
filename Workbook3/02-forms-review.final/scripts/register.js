window.onload = init;

function init()
{
    const registerButton = document.getElementById("registerButton");
    registerButton.onclick = register;
}


function register()
{
    // 1. get the user input
    const age = parseFloat(document.getElementById("ageInput").value);
    const name = document.getElementById("nameInput").value;

    let outgoingMessage;

    // 2. perform my logic
    if (age < 18){
        outgoingMessage = "You must be 18 years or older to register";
    }
    else {
        outgoingMessage =  "Welcome " + name ;
    }

    // 3. display the output
    document.getElementById("registerMessage").innerText = outgoingMessage; 
}



