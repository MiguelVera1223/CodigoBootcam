let voltaje= Math.round(+prompt("ingrese la cantidad de voltaje"));
let intensidad=  0 ;   
let resistencia = 4; 
let potencia = 0; 
intensidad = voltaje/resistencia; 

potencia= voltaje*intensidad; 

console.log(`la potencia es de :  ${potencia}`);