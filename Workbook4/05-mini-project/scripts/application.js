window.onload = function() {

    const menuList = document.getElementById("menuList");
    menuList.onchange = selectedMenuChanged;

}

function getMenus(){
    let menu = {
            drinks : [
            "Water", "Tea", "Sweet Tea",
            "Coke", "Dr. Pepper", "Sprite"
            ],
            entrees : [
            "Hamburger w/ Fries",
            "Grilled Cheese w/ Tater Tots",
            "Grilled Chicken w/ Veggies",
            "Chicken Fried Steak w/ Mashed Potatoes",
            "Fried Shrimp w/ Coleslaw",
            "Veggie Plate"
            ],
            desserts: [
            "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
            ]
        };

    return menu;
}

function filterMenu(category){

    let menus = getMenus();

    switch(category.toLowerCase())
    {
        case "drinks":
            return menus.drinks;
        case "entrees":
            return menus.entrees;
        case "desserts":
        default:
            return menus.desserts;
    }
}

function selectedMenuChanged(event){
    const menuList = event.target
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";

    const menu = filterMenu(menuList.value)
    for(let item of menu){
        const option = new Option(item);
        itemsList.appendChild(option)
    }

}