let edad=+prompt("ingrese la edad ");

let meses = 0
let semanas = 0; 
let dias =0; 
let horas = 0 ; 


meses = edad*12;
semanas = edad*4*12;
dias = edad*30*12;
horas = edad*24*30*12; 


console.log(`la edad en meses es de  :  ${meses}`);

console.log(`la edad en semanas es de  :  ${semanas}`);

console.log(`la edad en dias es de  :  ${dias}`);

console.log(`la edad en horas es de  :  ${horas}`);
