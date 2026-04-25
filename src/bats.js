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
        bat.src = batImage;
        bat.classList.add("bat");

        let categorySelect;
        let chance = Math.random();
        let selectVariant = function() {
            categorySelect = batVariety[Math.floor(Math.random() * batVariety.length)];
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();

        let duplicatePrevent = function() {
            let currTrait = [];
            let newTrait = [];
            for ( let i = 0; i < batVariety.length; i++ ) {
                for ( let j = 0; j < batVariety[i].length; j++ ) {
                    if ( batVariety[i][j] === bat.classList[1] ) {
                        currTrait = [i, j];
                    }

                    if ( batVariety[i][j] === `${currentPick}` ) {
                        newTrait = [i, j];
                    }
                }

                if ( newTrait.length === 2 && currTrait.length === 2 ) {
                    if ( newTrait.toString() === currTrait.toString() || newTrait[0] === currTrait[0] ) {
                        currentPick = selectVariant();
                        duplicatePrevent();
                    } else {
                        bat.classList.add(`${currentPick}`);
                    }
                }
            }
        }   
        
        if ( chance > 0.4 ) {
            bat.classList.add(currentPick);
        }

        if ( chance > 0.7 ) {
            duplicatePrevent();
        } 

        content.appendChild(bat);
    } 
}

export { batCloud };