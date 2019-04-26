const nameInput = document.querySelector("#name");
const otherTitle = document.querySelector("#other-title");
const titleSelectMenu = document.querySelector("#title");
const designSelect = document.querySelector("#design");
nameInput.focus();
otherTitle.style.display = "none";
let shirtsColor = ["cornflowerblue", "darkslategrey", "gold", "tomato", "steelblue", "dimgrey"];

toggleHeartJSShirt(false);

// true => show, false => hide
function toggleHeartJSShirt(toggle) {
    if (toggle) {
        for (let i = 3; i < 6; i++) {
            document.querySelector(`#color > option[value=${shirtsColor[i]}]`).style.display = null;
        }
        //Select the first option.
        document.querySelector(`#color > option[value=${shirtsColor[3]}]`).selected = 'selected';
    } else {
        for (let i = 3; i < 6; i++) {
            document.querySelector(`#color > option[value=${shirtsColor[i]}]`).style.display = "none";
        }
    }
}

function toggleJSPunsShirt(toggle) {
    if (toggle) {
        for (let i = 0; i < 3; i++) {
            document.querySelector(`#color > option[value=${shirtsColor[i]}]`).style.display = null;
        }
        // Select the first element.
        document.querySelector(`#color > option[value=${shirtsColor[0]}]`).selected = 'selected';
    } else {
        for (let i = 0; i < 3; i++) {
            document.querySelector(`#color > option[value=${shirtsColor[i]}]`).style.display = "none";
        }
    }
    
}


titleSelectMenu.addEventListener("change", e => {
    if (e.target.value === "other") {
        otherTitle.style.display = "block";
    } else {
        otherTitle.style.display = "none";
    }
});

designSelect.addEventListener("change", e => {
    if (e.target.value === "js puns") {
        toggleHeartJSShirt(false);
        toggleJSPunsShirt(true);
    } else if (e.target.value === "heart js") {
        toggleJSPunsShirt(false);
        toggleHeartJSShirt(true);
    }
});