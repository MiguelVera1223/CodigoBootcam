let precio= Math.round(+prompt("ingrese el precio de la ropa"));
let descuento = 0.2; 
let iva = 0.15;
let pago = 0;


pago=Math.round(precio*0.8 + precio*0.15); 
console.log(`el pago por la ropa X es de  : S/ ${pago}`);