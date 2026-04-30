import bloodIcon from "./assets/img/blood.svg";
import fangsIcon from "./assets/img/fangs.svg";

let menuDisplay = function() {
    let content = document.querySelector("#content");

    let menuBlock = document.createElement("nav");
    menuBlock.classList.add("menu-nav");
    
    let bloodButton = document.createElement("button");
    bloodButton.textContent = "blood";
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
    
    menuBlock.appendChild(bloodButton);
    menuBlock.appendChild(fleshButton);

    content.appendChild(menuBlock);
}

export { menuDisplay };