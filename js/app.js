const nameInput = document.querySelector("#name");
const otherTitle = document.querySelector("#other-title");
const titleSelectMenu = document.querySelector("#title");
nameInput.focus();
otherTitle.style.display = "none";

titleSelectMenu.addEventListener("change", e => {
    if (e.target.value === "other") {
        otherTitle.style.display = "block";
    } else {
        otherTitle.style.display = "none";
    }
});