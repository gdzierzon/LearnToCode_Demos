let categoriesService

document.addEventListener("DOMContentLoaded", () => {
    categoriesService = new CategoriesService()

    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", saveNewCategory)
})

async function saveNewCategory(event)
{
    event.preventDefault()

    // save the category to the API
    // 1. build a category object
    const name = document.getElementById("categoryName").value
    const description = document.getElementById("description").value

    const category = {
        "name": name,
        "description": description
    }

    console.log(category);
    const newCategory = await categoriesService.add(category)
    console.log(newCategory);
    
    // go back to the home page
    location.href = "/index.html"
}