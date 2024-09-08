"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("weField");
    newNode.classList.add("multiplelabel");
    newNode.classList.add("nameField");
    newNode.setAttribute("placeholder", "Enter Here"); // Set placeholder for the new textarea  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    // Append the new textarea to the parent div  
    if (weOb) {
        weOb.insertBefore(newNode, weAddButtonOb); // Insert before the button  
    }
}
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("eqField");
    newNode.classList.add("multiplelabel");
    newNode.classList.add("nameField");
    newNode.setAttribute("placeholder", "Enter Here"); // Set placeholder for the new textarea  
    let aqOb = document.getElementById("orr");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    // Append the new textarea to the parent div  
    if (aqOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb); // Insert before the button  
    }
}
// ----------------------------------------------------------------------
function generateCV() {
    const nameField = document.getElementById("nameField");
    if (nameField) {
        const nameValue = nameField.value;
        // Now you can use nameValue as needed  
        const nameT1 = document.getElementById("nameT1"); // Cast to HTMLElement  
        if (nameT1) { // Check if nameT1 is not null  
            nameT1.innerHTML = nameValue; // Use nameValue instead of nameField?.value  
        }
        const nameT2 = document.getElementById("nameT2"); // Cast to HTMLElement  
        if (nameT2) { // Check if nameT1 is not null  
            nameT2.innerHTML = nameValue; // Use nameValue instead of nameField?.value  
        }
        // contact
        const contactT = document.getElementById("contactT");
        const ContactField = document.getElementById("ContactField");
        if (contactT && ContactField) {
            contactT.innerHTML = ContactField.value;
        }
    }
    //adress field
    const addressT = document.getElementById("addressT");
    const addressField = document.getElementById("addressField");
    if (addressT && addressField) {
        addressT.innerHTML = addressField.value;
    }
    //fb field
    const fbT = document.getElementById("fbT");
    const fbField = document.getElementById("fbField");
    if (fbT && fbField) {
        fbT.innerHTML = fbField.value;
    }
    //instgram field
    const instaT = document.getElementById("instaT");
    const instaField = document.getElementById("instaField");
    if (instaT && instaField) {
        instaT.innerHTML = instaField.value;
    }
    //linked in  field
    const linkedT = document.getElementById("linkedT");
    const linkedField = document.getElementById("linkedField");
    if (linkedT && linkedField) {
        linkedT.innerHTML = linkedField.value;
    }
    //objective
    const objectiveT = document.getElementById("objectiveT");
    const objectiveField = document.getElementById("objectiveField");
    if (objectiveT && objectiveField) {
        objectiveT.innerHTML = objectiveField.value;
    }
    // Work Experience  
    const weT = document.getElementById("weT");
    const weFields = document.getElementsByClassName("weField");
    if (weT && weFields.length > 0) {
        // Assuming you want the value of the first element with the class "weField"  
        weT.innerHTML = weFields[0].value;
    }
    // Academic Education
    const aqT = document.getElementById("aqT");
    const eqField = document.getElementsByClassName("eqField");
    if (aqT && eqField.length > 0) {
        // Assuming you want the value of the first element with the class "eqField"  
        aqT.innerHTML = eqField[0].value;
    }
    const container = document.getElementById('container');
    if (container) {
        container.style.display = 'none';
    }
}
function printcv() {
    window.print();
}
