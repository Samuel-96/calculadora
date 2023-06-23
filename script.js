// VARIABLES y DOM

let num1, num2;
let operador;
let input; //string mostrado en la pantalla de la calc, luego se procesara y se dividira en num1, num2 y operador
const pantalla = document.querySelector(".contenedor-datos");
const botones = document.querySelectorAll("button");


// EVENT LISTENERS

botones.forEach(boton => {
    boton.addEventListener("click", mostrarEnPantalla);
    boton.addEventListener("touchstart", mostrarEnPantalla);
});


// FUNCIONES QUE INTERACTUAN CON LA INFO DE LA CALCULADORA

function mostrarEnPantalla(e){
    let valorBoton = e.target.textContent;

    switch(valorBoton){
        case "AC": borrarTodo(); valorBoton = ""; break;
        case "C": borrarUno(); valorBoton = ""; break;
        case "=": resultado(pantalla.textContent); valorBoton = ""; break;
    }

    if(valorBoton === "+" || valorBoton === "-" || valorBoton === "*" || valorBoton === "/"){
        if(pantalla.textContent.slice(-1) === "+" || pantalla.textContent.slice(-1) === "-" || pantalla.textContent.slice(-1) === "*" || pantalla.textContent.slice(-1) === "/"){
            valorBoton = "";
        }
    }

    pantalla.textContent = pantalla.textContent + valorBoton;
    
}

function borrarTodo(){
    pantalla.textContent = "";
}

function borrarUno(){
    let datosPantalla = pantalla.textContent;

    datosPantalla = datosPantalla.slice(0, -1);

    pantalla.textContent = datosPantalla;
}


// OPERACIONES DE LA CALCULADORA

function suma(num1, num2){
    return num1 + num2;
}

function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function operaracion(num1, num2, operador){
    let resultado;

    switch(operador){
        case "+": resultado = suma(num1, num2); break;
        case "-": resultado = resta(num1, num2); break;
        case "*": resultado = multiplicacion(num1, num2); break;
        case "/": resultado = division(num1, num2); break;
    }

    return resultado;
}

function resultado(datos){
    let datosProcesados = datos.split("+");
    let resultado = operaracion(parseInt(datosProcesados[0]), parseInt(datosProcesados[1]), "+");

    pantalla.textContent = resultado;

}

