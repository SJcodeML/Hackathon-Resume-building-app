"use strict";
// function addNewWEField(){
//   let newNode = document.createElement("textarea")
//   newNode.classList.add("weField")
//   newNode.classList.add("multiplelabel")
//   newNode.classList.add("nameField")
Object.defineProperty(exports, "__esModule", { value: true });
//   let weOb = document.getElementById("we");
//   let weAddButtonOb = document.getElementById("weAddButton");
//   weOb?.insertBefore(newNode , weAddButtonOb);
// }
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("weField");
    newNode.classList.add("multiplelabel");
    newNode.classList.add("nameField");
    newNode.setAttribute("placeholder", "Enter Here"); // Set placeholder for the new textarea  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    // Insert the new textarea before the button's parent div  
    weOb?.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("eqField");
    newNode.classList.add("multiplelabel");
    newNode.classList.add("nameField");
    newNode.setAttribute("placeholder", "Enter Here"); // Set placeholder for the new textarea  
    let aqOb = document.getElementById("orr");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    // Insert the new textarea before the button's parent div  
    aqOb?.insertBefore(newNode, aqAddButtonOb);
}
