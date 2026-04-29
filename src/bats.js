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

    for (let n = 0; n < 10; n++) {
        let body = document.querySelector("body");

        let bat = document.createElement("img");
        bat.src = batImage;
        bat.classList.add("bat");

        function placeBat() { //fix so that bats won't elongate the page beyond content
            let maxX = innerWidth;
            let maxY = body.scrollHeight - bat.height;
            let x = Math.random() * maxX;
            let y = Math.random() * maxY;

            bat.style = `left: ${x}px; top: ${y}px;`;
            body.appendChild(bat)
        }

        let categorySelect;
        let chance = Math.random();
        let selectVariant = function() {
            categorySelect = batVariety[Math.floor(Math.random() * batVariety.length)];
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();

        let duplicatePrevent = function() {
            console.log(`current trait pick is ${currentPick}`);
            let currTrait = [];
            let newTrait = [];

            while (newTrait.length < 2 && currTrait.length < 2 ) {

                for ( let i = 0; i < batVariety.length; i++ ) {
                for ( let j = 0; j < batVariety[i].length; j++ ) {
                    if ( batVariety[i][j] === bat.classList[1] ) {
                        currTrait = [i, j];
                        console.log(`this is bat number ${n}, and her current unique trait is ${bat.classList[1]}, its index is ${currTrait}`)
                    }

                    if ( batVariety[i][j] === `${currentPick}` ) {
                        newTrait = [i, j];
                        console.log(`this is bat number ${n}, and her new trait is ${currentPick}, its index is ${newTrait}`)
                    }
                }
            }

                if ( newTrait.length === 2 && currTrait.length === 2 ) {
                    
                    if ( newTrait.toString() === currTrait.toString() || newTrait[0] === currTrait[0] ) {
                        console.log('picking a new trait!');
                        currTrait.length = 0;
                        newTrait.length = 0;
                        currentPick = selectVariant();
                        duplicatePrevent();
                    } else {
                        bat.classList.add(`${currentPick}`);
                        console.log(`adding initially picked trait, this is bat number ${n}, her traits are ${bat.classList}`);
                    }
                }
            }
        }   
        
        if ( chance > 0.4) {
            bat.classList.add(currentPick);
        }

        if ( chance > 0.7) {
            duplicatePrevent(); //check why some bats get more than 2 traits
        } 

        placeBat();
    } 
}

export { batCloud };