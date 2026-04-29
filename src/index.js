import "./style.css";
import bloodIcon from "./assets/img/blood.svg"
import fangsIcon from "./assets/img/fangs.svg"

import { batCloud } from "./bats.js";
import { menuDisplay } from "./menu.js";
import { contactDisplay } from "./contact.js";
import { homeDisplay } from "./home.js";

window.addEventListener("load", function() {

    let content = document.querySelector("#content");
    batCloud();

    let title = document.querySelector("#center-title");

    let navigation = {
        home: homeDisplay,
        menu: menuDisplay,
        contact: contactDisplay 
    }

    let allMenuButtons = document.querySelectorAll("nav > button");

    allMenuButtons.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.target.classList.add("hidden");
            title.textContent = event.target.textContent;
            navigation[`${event.target.id}`]();

            let nonActiveMenuItems = [ ...allMenuButtons ].filter( button => button != event.target);
            nonActiveMenuItems.forEach((item) => item.classList.remove("hidden"));
        })
    })
})

