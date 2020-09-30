

let rpta = "s"; 
let sumatoria = 0; 

while (rpta === "s") {
    let nro = +prompt("ingrese numero");
    sumatoria = sumatoria + nro; 
    rpta = prompt("¿desea seguir ingresando numero? ");
   while (rpta !== "s" && rpta !=="n") {
       rpta =  prompt("Error ingrese una respuesta valida");
   }
}
console.log(`la suma total es : ${sumatoria}`);