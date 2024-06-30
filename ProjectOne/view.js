let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");


//declaring this vraiable as globally
let kitchenInputValue;

let kitchenInputArray = [];



function setLocalStorage(){
    localStorage.setItem("kitchenItem",JSON.stringify(kitchenInputArray));
}
function getLocalStorage(){
    if (localStorage.getItem("kitchenItem")){
        kitchenInputArray = JSON.parse(localStorage.getItem("kitchenItem"));
        buildUI()
        console.log(kitchenInputArray);
    } 
    else {
        console.log("Couldn't find the value");
    }
}

function buildUI(){
    kitchenItemsList.textContent = " ";
    //to get the value one by one we should use foreach
    kitchenInputArray.forEach((item) => {    

     //DOM Elemnt Creation
     let li = document.createElement("li");
     // li.innerText = kitchenInputValue; its an error!!!!!!!!!
 
     //create a span elemnet and appnd it into the li element 
     let spanEl = document.createElement("span"); 
     li.appendChild(spanEl);
     spanEl.innerText =item;
 
     //this is how we give animation style in js
     li.style.cssText = "animation-name: slideIn;"
 
     kitchenItemsList.appendChild(li); 
     kitchenInput.value =" ";//to reset the inputbox
     kitchenInput.focus();//focus is an inbuiod function to set the curser automatically in inputbox.
 
     //creating trash button
     let trashButton = document.createElement("i");
     trashButton.classList.add("fas","fa-trash");
     li.appendChild(trashButton);
 
     //creating edit button
     let editBtn = document.createElement("i");
     editBtn.classList.add("fas","fa-edit");
     li.appendChild(editBtn);
    }); 
}


//step 2 create function for Event:
function addingItems(event){
    
    kitchenInputValue = kitchenInput.value;

     //array push----> 
     kitchenInputArray.push(kitchenInputValue);

     setLocalStorage();

     getLocalStorage();
    
   

   
}

//delete item
function deleteItems(event) {
    if (event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        //let itemText = item.textContent.trim();
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
            // console.log("Animation completed");
            item.remove();
        })
       // item.remove();
        //alert(`${itemText} Deleted`);
        // console.log(item);
    }
}

//edit item
function editButton(event) {
    if (event.target.classList[1] === "fa-edit") {
        let editValue = prompt("Enter your new value");
        let item = event.target.parentElement;
        let spanEl = item.querySelector('span');
        spanEl.innerText = editValue;
        console.log(spanEl);
            
        }
    }



addBtn.addEventListener("click", addingItems);
kitchenItemsList.addEventListener("click", deleteItems);
kitchenItemsList.addEventListener("click", editButton);

getLocalStorage();