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
        let categorySelect;
        let selectVariant = function() {
            categorySelect = batVariety[Math.floor(Math.random() * batVariety.length)];
            console.log(batVariety.indexOf(categorySelect));
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();
        let chance = Math.random();
        bat.src = batImage;
        bat.classList.add("bat");
            if ( chance > 0.4 ) {
                if (bat.classList.contains(`${currentPick}`) && !bat.classList.contains(batVariety.indexOf(categorySelect))) {
                    console.log (`current pick is ${currentPick}, this is bat number ${i}`)
                }
                bat.classList.contains(`${currentPick}`) ? bat.classList.add(`${selectVariant()}`) : bat.classList.add(`${currentPick}`);
                if (chance > 0.7) {
                    bat.classList.contains(`${currentPick}`) ? bat.classList.add(`${selectVariant()}`) : bat.classList.add(`${currentPick}`);
                } 
            }

        content.appendChild(bat);
    } 
}

export { batCloud };