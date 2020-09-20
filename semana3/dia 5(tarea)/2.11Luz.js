let cantidad_luz= Math.round(+prompt("ingrese la cantidad de luz"));

   
let costoxKW = 8; 
let costo = 0;

costo=Math.round(cantidad_luz*costoxKW); 
console.log(`el costo por el consumo de luz es  : S/ ${costo}`);