let homeDisplay = function() {
    let content = document.querySelector("#content");

    let homeBlock = document.createElement("div");
    homeBlock.textContent = 'Welcome in, our dear guest!';
    homeBlock.classList.add("home-text");
    content.appendChild(homeBlock);
}

export { homeDisplay };