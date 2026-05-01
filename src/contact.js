//make 'normal' contact text for any humans that would unknowingly
//step into this place. BUT the text should change on hover

let contactDisplay = function() {
    let content = document.querySelector("#content");

    let contactBlock = document.createElement("div");
    contactBlock.classList.add("contact-text");
    contactBlock.textContent = 'test2'
    content.appendChild(contactBlock);
}

export { contactDisplay };