let categoriesService

document.addEventListener("DOMContentLoaded", () => {
    categoriesService = new CategoriesService()

    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", saveNewCategory)
})

async function saveNewCategory(event)
{
    // prevent the form from posting and re-loading the page
    event.preventDefault()

    // save the category to the API
    // 1. build a category object
    const name = document.getElementById("categoryName").value
    const description = document.getElementById("description").value

    // 2. create a JavaScript object - this will be the "body" of the request
    const category = {
        "name": name,
        "description": description
    }

    console.log(category);
    const newCategory = await categoriesService.add(category)
    console.log(newCategory);

    const addedModal = document.getElementById("addedModal")
    new bootstrap.Modal(addedModal).show();

    // document.getElementById("addedModal").modal()
    
    // go back to the home page
    // location.href = "/index.html"
}

function closeModal()
{
    location.href = "/index.html"
}