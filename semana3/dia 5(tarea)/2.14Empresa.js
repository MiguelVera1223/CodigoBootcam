let hotel= Math.round(+prompt("ingrese la cantidad en soles de hotel "));
let comida= Math.round(+prompt("ingrese la cantidad en soles de comida"));    
let otros = 100.00; 
let monto = 0; 

monto=hotel + comida + otros; 
console.log(`el monto es de :  S/ ${monto}`);