import bloodIcon from "./assets/img/blood.svg";
import fangsIcon from "./assets/img/fangs.svg";

let menuDisplay = function() {
    let content = document.querySelector("#content");

    let menuBlock = document.createElement("nav");
    menuBlock.classList.add("menu-nav");
    
    let bloodButton = document.createElement("button");
    bloodButton.textContent = "blood";
    bloodButton.id = "blood";
    let bloodImage = document.createElement("img");
    let secondDrop = document.createElement("img");
    secondDrop.classList.add("droplet");
    bloodImage.src = bloodIcon;
    secondDrop.src = bloodIcon;
    bloodButton.append(bloodImage);
    bloodButton.append(secondDrop);

    let fleshButton = document.createElement("button");
    let fleshImage = document.createElement("img");
    fleshImage.src = fangsIcon;
    fleshButton.textContent = "flesh";
    fleshButton.append(fleshImage);
    fleshButton.id = "flesh";
    
    menuBlock.appendChild(bloodButton);
    menuBlock.appendChild(fleshButton);

    content.appendChild(menuBlock);

    let drinksMenu = function() {
        let setUpDrink = function(title, ingredients) {
            let drinkItem = document.createElement("div");
            drinkItem.classList.add("item");
            
            let drinkTitle = document.createElement("div");
            drinkTitle.classList.add("title");
            drinkTitle.textContent = title.toUpperCase();
            let drinkDescription = document.createElement("div");
            drinkDescription.classList.add("description");
            drinkDescription.textContent = ingredients;
            
            drinkItem.appendChild(drinkTitle);
            drinkItem.appendChild(drinkDescription);

            content.appendChild(drinkItem);
        }

        setUpDrink("testdrink", "made out of something?")
    }

    let foodMenu = function() {
        let setUpDish = function(category, [...dishes]) {
            let foodSection = document.createElement("div");
            foodSection.classList.add("item");
            
            let foodCategory = document.createElement("div");
            foodCategory.classList.add("title");
            foodCategory.textContent = category.toUpperCase();

            foodSection.appendChild(foodCategory);

            [...dishes].forEach((foodItem) => {
                let foodList = document.createElement("div");
                foodList.classList.add("description");
                foodList.textContent = foodItem;
                foodSection.appendChild(foodList);
            })        
            
            content.appendChild(foodSection);
        }

        setUpDish("testDish", ["dish1", "dish2", "dish3"]);
        setUpDish("testDish2", ["dish12", "dish22", "dish32"]);
    }

    let menuOptions = {
        blood: drinksMenu,
        flesh: foodMenu
    }

    let menuViews = document.querySelectorAll(".menu-nav > button");
        menuViews.forEach((button) => {
            button.addEventListener("click", function(event) {
                content.replaceChildren(menuBlock);
                menuOptions[`${event.target.id}`]();
            })
    })
}

export { menuDisplay };