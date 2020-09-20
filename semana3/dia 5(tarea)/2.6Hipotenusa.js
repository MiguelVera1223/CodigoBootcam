let cateto1 = +prompt("un cateto es  :");
let cateto2 = +prompt("el otro cateto es:");
let hipotenusa = 0;

hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));


console.log(`la hipotenusa es: ${hipotenusa}`);