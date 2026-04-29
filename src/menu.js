let menuDisplay = function() {
    let content = document.querySelector("#content");

    content.replaceChildren();

    let menuBlock = document.createElement("div");
    menuBlock.textContent = 'this is a test'
    content.appendChild(menuBlock);
}

export { menuDisplay };