let regalo= +prompt("ingrese un precio");

if (regalo<=10) {
    console.log("se compra la tarjeta");
} else if (regalo>=11 && regalo<= 100) {
    console.log("se compra los chocolates");
} else if (regalo>=101 && regalo<= 250){
    console.log("se compra las flores");
}else {
    console.log("compra el anillo");
}