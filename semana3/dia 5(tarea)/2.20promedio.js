let nota1= Math.round(+prompt("ingrese la nota 1"));
let nota2=   Math.round(+prompt("ingrese la nota 2")); 
let nota3 = Math.round(+prompt("ingrese la nota 3")); 
let promedio = 0; 


promedio = (0.25*nota1 + 0.25*nota2 +0.5*nota3)/3;

console.log(`el promedio es de :  ${promedio}`);