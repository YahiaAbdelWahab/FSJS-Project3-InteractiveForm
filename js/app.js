const nameInput = document.querySelector("#name");
const otherTitle = document.querySelector("#other-title");
const titleSelectMenu = document.querySelector("#title");
const designSelect = document.querySelector("#design");
const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
let activitiesTotalCost = 0;
const activitiesFieldset = document.querySelector("fieldset.activities");

nameInput.focus();
otherTitle.style.display = "none";
let shirtsColor = ["cornflowerblue", "darkslategrey", "gold", "tomato", "steelblue", "dimgrey"];

toggleHeartJSShirt(false);

paypal.style.display = "none";
bitcoin.style.display = "none";

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

function getActivitiesCost(index, checked) {
    if (checked) {
        if (index === 1) {
            activitiesTotalCost += 200;
        } else if (index > 1) {
            activitiesTotalCost += 100;
        }
    } else {
        if (index === 1) {
            activitiesTotalCost -= 200;
        } else if (index > 1) {
            activitiesTotalCost -= 100;
        }
    }
    return activitiesTotalCost;
}

function manageConflict(index, checked) {
    if (checked) {
        switch (index) {
            case 2: {
                //Disable index: 4 and 6
                const index4 = activitiesFieldset.children[4].children[0];
                const index6 = activitiesFieldset.children[6].children[0];
                index4.disabled = true;
                index6.disabled = true;

                index4.parentElement.style.color = "gray";
                index6.parentElement.style.color = "gray";
                break;
            }
                
            case 4: {
                //Disable index: 2 and 6
                const index2 = activitiesFieldset.children[2].children[0];
                const index6 = activitiesFieldset.children[6].children[0];
                index2.disabled = true;
                index6.disabled = true;

                index2.parentElement.style.color = "gray";
                index6.parentElement.style.color = "gray";
                break;
            }
                
            case 6: {
                //Disable index: 2 and 4
                const index2 = activitiesFieldset.children[2].children[0];
                const index4 = activitiesFieldset.children[4].children[0];
                index2.disabled = true;
                index4.disabled = true;

                index2.parentElement.style.color = "gray";
                index4.parentElement.style.color = "gray";
                break;
            }
                
            case 3: {
                //Disable index 5 and 7
                const index5 = activitiesFieldset.children[5].children[0];
                const index7 = activitiesFieldset.children[7].children[0];
                index5.disabled = true;
                index7.disabled = true;

                index5.parentElement.style.color = "gray";
                index7.parentElement.style.color = "gray";
                break;
            }
                
            case 5: {
                //Disable index 3 and 7
                const index3 = activitiesFieldset.children[3].children[0];
                const index7 = activitiesFieldset.children[7].children[0];
                index3.disabled = true;
                index7.disabled = true;

                index3.parentElement.style.color = "gray";
                index7.parentElement.style.color = "gray";
                break;
            }
                
            case 7: {
                //Disable index 3 and 5
                const index3 = activitiesFieldset.children[3].children[0];
                const index5 = activitiesFieldset.children[5].children[0];
                index3.disabled = true;
                index5.disabled = true;

                index3.parentElement.style.color = "gray";
                index5.parentElement.style.color = "gray";
                break;
            }
                
        }
    } else {
        switch (index) {
            case 2: {
                //Disable index: 4 and 6
                const index4 = activitiesFieldset.children[4].children[0];
                const index6 = activitiesFieldset.children[6].children[0];
                index4.disabled = false;
                index6.disabled = false;

                index4.parentElement.style.color = null;
                index6.parentElement.style.color = null;
                break;
            }
                
            case 4: {
                //Disable index: 2 and 6
                const index2 = activitiesFieldset.children[2].children[0];
                const index6 = activitiesFieldset.children[6].children[0];
                index2.disabled = false;
                index6.disabled = false;

                index2.parentElement.style.color = null;
                index6.parentElement.style.color = null;
                break;
            }
                
            case 6: {
                //Disable index: 2 and 4
                const index2 = activitiesFieldset.children[2].children[0];
                const index4 = activitiesFieldset.children[4].children[0];
                index2.disabled = false;
                index4.disabled = false;

                index2.parentElement.style.color = null;
                index4.parentElement.style.color = null;
                break;
            }
                
            case 3: {
                //Disable index 5 and 7
                const index5 = activitiesFieldset.children[5].children[0];
                const index7 = activitiesFieldset.children[7].children[0];
                index5.disabled = false;
                index7.disabled = false;

                index5.parentElement.style.color = null;
                index7.parentElement.style.color = null;
                break;
            }
                
            case 5: {
                //Disable index 3 and 7
                const index3 = activitiesFieldset.children[3].children[0];
                const index7 = activitiesFieldset.children[7].children[0];
                index3.disabled = false;
                index7.disabled = false;

                index3.parentElement.style.color = null;
                index7.parentElement.style.color = null;
                break;
            }
                
            case 7: {
                //Disable index 3 and 5
                const index3 = activitiesFieldset.children[3].children[0];
                const index5 = activitiesFieldset.children[5].children[0];
                index3.disabled = false;
                index5.disabled = false;

                index3.parentElement.style.color = null;
                index5.parentElement.style.color = null;
                break;
            }
                
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

activitiesFieldset.addEventListener("change", e => {
    let checked = false;
    if (e.target.checked == true) {
        checked = true;
    }

    const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    document.querySelector("p#cost").remove();
    const costP = document.createElement("p");
    costP.id = "cost";
    costP.appendChild(document.createTextNode(`Total: $${getActivitiesCost(index, checked)}`));
    const paymentFieldset = document.querySelector("fieldset.payment");
    document.querySelector("form").insertBefore(costP, paymentFieldset);

    manageConflict(index, checked);
});