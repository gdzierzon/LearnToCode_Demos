let categoriesService

document.addEventListener("DOMContentLoaded", () => {
    categoriesService = new CategoriesService()

    loadCategories()
   
})

function loadCategories() {
    categoriesService.getAll()
                     .then(categories => {
                        displayRows(categories)
                     })
}

function displayRows(categories) {
    document.getElementById("categoryRows").innerHTML = ""

    categories.forEach(category => {
        displayRow(category)
    });

}

function displayRow(category) {
    const categoryRows = document.getElementById("categoryRows")

    const row = categoryRows.insertRow(-1)
    const idCell = row.insertCell(0)
    idCell.innerText = category.id
    const nameCell = row.insertCell(1)
    nameCell.innerText = category.name
    const detailsCell = row.insertCell(2)
    detailsCell.innerText = category.description

}