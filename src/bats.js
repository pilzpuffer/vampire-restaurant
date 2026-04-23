import batImage from "./assets/img/bat.svg";

let batCloud = function () {
    let batVariety =[
                        ["mirror"], 
                        ["shuffleL", "shuffleR", "slideL", "slideR"], 
                        ["jump", "fly", "dig", "tunnel"], 
                        ["tipsy", "boozy", "drunk", "confused", "disoriented", "lost"], 
                        ["wisp", "ghost", "ghoul"], 
                        ["fairy", "dwarf", "giant", "goliath"]
                    ];

    for (let i = 0; i < 10; i++) {
        let bat = document.createElement("img");
        let selectVariant = function() {
            let categorySelect = batVariety[Math.floor(Math.random() * batVariety.length)];
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();
        let chance = Math.random();
        bat.src = batImage;
        bat.classList.add("bat");
            if ( chance > 0.5 ) {
                bat.classList.contains(`${currentPick}`) ? bat.classList.add(`${selectVariant()}`) : bat.classList.add(`${currentPick}`);
                if (chance > 0.75) {
                    bat.classList.contains(`${currentPick}`) ? bat.classList.add(`${selectVariant()}`) : bat.classList.add(`${currentPick}`);
                } 
            }

        content.appendChild(bat);
    } 
}

export { batCloud };