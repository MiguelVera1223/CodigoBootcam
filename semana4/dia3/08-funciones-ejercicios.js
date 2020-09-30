/*
crear un algoritmo donde exista una fncion que reciba un arreglo
de edades y retorne t a todos los amyoere 
*/ 



const filtroMayores =(edades) => {
    let mayores = [];

    for(let c =0; c<=edades.length; c++){
       
        if(edades[c]>=18){
          mayores.push(edades[c]);
        }

    }
    return mayores;
} 

let arreglo = [12, 19, 17, 58 , 42 ,10];
console.log(filtroMayores(arreglo));