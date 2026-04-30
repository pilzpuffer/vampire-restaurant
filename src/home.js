let homeDisplay = function() {
    let content = document.querySelector("#content");

    let homeBlock = document.createElement("div");
    homeBlock.textContent = 'another test'
    content.appendChild(homeBlock);
}

export { homeDisplay };