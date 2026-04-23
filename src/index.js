import "./style.css";
import bloodIcon from "./assets/img/blood.svg"
import fangsIcon from "./assets/img/fangs.svg"

import { batCloud } from "./bats.js";

console.log('Hey, bloodsucker!');

window.addEventListener("load", function() {

    let content = document.querySelector("#content");
    batCloud();
})

