let cantidad_agua= Math.round(+prompt("ingrese la cantidad de agua "));

   
let costoxmetrocubico = 5; 
let costo = 0;

costo=Math.round(cantidad_agua*costoxmetrocubico); 
console.log(`el costo por el consumo de agua es  : S/ ${costo}`);