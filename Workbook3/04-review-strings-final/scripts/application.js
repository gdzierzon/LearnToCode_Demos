
window.onload = init;

function init() {
    const registerButton = document.getElementById("registerButton");
    const uploadButton = document.getElementById("uploadButton");

    registerButton.onclick = registerButtonClicked;
    uploadButton.onclick = uploadButtonClicked;
}

function registerButtonClicked() {
    const fullName = document.getElementById("nameInput").value;
    const welcomeDiv = document.getElementById("welcomeMessageContainer");

    const firstName = getFirstName(fullName);
    let message;

    if(hasMiddleName(fullName)) {    
        message = `Welcome ${firstName}`;
    }
    else {
        message = "You must enter your FULL NAME to register"
    }

    welcomeDiv.innerText = message;
}

function uploadButtonClicked() {
    const fileUploadInput = document.getElementById("fileUploadInput");
    const fileTypeContainer = document.getElementById("fileTypeContainer");

    const fileType = getFileType(fileUploadInput.value);

    const message = `You are uploading a ${fileType}`;

    fileTypeContainer.innerText = message;

}
