


function addNewWEField() {  
  let newNode = document.createElement("textarea");  
  newNode.classList.add("weField");  
  newNode.classList.add("multiplelabel");  
  newNode.classList.add("nameField");  
  newNode.setAttribute("placeholder", "Enter Here"); // Set placeholder for the new textarea  
  
  let weOb = document.getElementById("we");  
  let weAddButtonOb:HTMLElement|null = document.getElementById("weAddButton");  

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
  let aqAddButtonOb:HTMLElement|null = document.getElementById("aqAddButton");  

  // Insert the new textarea before the button's parent div  
  aqOb?.insertBefore(newNode, aqAddButtonOb);  
}
