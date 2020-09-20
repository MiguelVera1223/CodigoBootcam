let sueldo= Math.round(+prompt("ingrese el sueldo del mes"));
let ahorroalmes= 0.15; 

let ahorro = 0;


ahorro=Math.round(sueldo*ahorroalmes*12); 
console.log(`la persona ahorra : S/ ${ahorro}`);