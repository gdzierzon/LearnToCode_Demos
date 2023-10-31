window.onload = function() {
    const button = document.getElementById("submitButton");

    button.onclick = submitForm;
    // const theForm = document.getElementById("theForm");

    // theForm.onsubmit = submitForm;

}

function submitForm(event) {

    // stop the default form submission
    // event.preventDefault();

    console.log(event);
    console.log("form submitted")
}