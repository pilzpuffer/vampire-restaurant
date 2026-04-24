import "./style.css";
import bloodIcon from "./assets/img/blood.svg"
import fangsIcon from "./assets/img/fangs.svg"

import { batCloud } from "./bats.js";

window.addEventListener("load", function() {

    let content = document.querySelector("#content");
    batCloud();

    let title = document.querySelector("#center-title");

    let allMenuButtons = document.querySelectorAll("nav > button");

    allMenuButtons.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.target.classList.add("hidden");
            title.textContent = event.target.textContent;

            let nonActiveMenuItems = [ ...allMenuButtons ].filter( button => button != event.target);
            nonActiveMenuItems.forEach((item) => item.classList.remove("hidden"));
        })
    })
})

