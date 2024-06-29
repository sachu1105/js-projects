                       //parameter
function makeAnything(value,value2) {
    let petrol = document.getElementById('one1');
    let diesel = document.getElementById('two2');


    petrol.innerHTML=`The Petrol price is ${value} rupees`;
    diesel.innerHTML=`The Diesel price is ${value2} rupees`;

}
            //arguments
makeAnything(108,100);
