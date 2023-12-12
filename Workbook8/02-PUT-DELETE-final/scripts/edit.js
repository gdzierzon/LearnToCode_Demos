let categoriesService
let id;

document.addEventListener("DOMContentLoaded", () => {
    categoriesService = new CategoriesService()
    
    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", updateCategory)

    const params = new URLSearchParams(location.search)
    if(params.has("id"))
    {
        id = params.get("id")
        loadCategory(id)
    }
    else {
        alert("You must select a category to edit")
        location.href = "/index.html"
    }

})

async function loadCategory(id) {
    let category = await categoriesService.getById(id)
    console.log(category);

    document.getElementById("categoryId").value = category.id
    document.getElementById("categoryName").value = category.name
    document.getElementById("description").value = category.description
}

async function updateCategory(event) {
    event.preventDefault()

    const name = document.getElementById("categoryName").value
    const description = document.getElementById("description").value

    // 2. create a JavaScript object - this will be the "body" of the request
    const category = {
        "id": id,
        "name": name,
        "description": description
    }

    await categoriesService.update(category)

    location.href = "/index.html"
}