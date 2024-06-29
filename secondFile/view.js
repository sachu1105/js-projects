// let kitchenItems = document.getElementById('kitchen-items-list');
// let curryPowder = [ "pepper", "chilli", "turmeric", "coriander"]

// for (let powder of curryPowder) {
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItems.appendChild(li);
//     console.log(li);
// }

// curryPowder.forEach(function(powder){
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItems.appendChild(li);
// })

// curryPowder.forEach(function(powder){
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItems.appendChild(li);
// })

let allItems = document.querySelectorAll("li");
let powderArray = [];

allItems.forEach(function(item){
    let itemText = item.innerText;
    powderArray.push(itemText);
});

powderArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


console.log(powderArray);

