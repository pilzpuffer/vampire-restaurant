import "./style.css";
import batImage from "./assets/img/bat.svg";

console.log('Hey, bloodsucker!');

window.addEventListener("load", function() {

    let content = document.querySelector("#content");
    let batVariety = ["gray-filter", "rotate", "wisp", "ghost", "ghoul"];

    for (let i = 0; i < 10; i++) {
        let bat = document.createElement("img");
        let selectVariant = batVariety[Math.floor(Math.random() * batVariety.length)];
        console.log(selectVariant);
        let chance = Math.random();
        bat.src = batImage;
        bat.classList.add("bat");
            if ( chance > 0.5 ) {
                bat.classList.add(`${selectVariant}`);
            }

        content.appendChild(bat);
    } 
})

