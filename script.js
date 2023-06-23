// VARIABLES
let num1, num2;
let operador;
let input; //string mostrado en la pantalla de la calc, luego se procesara y se dividira en num1, num2 y operador

// EVENT LISTENERS

const botones = document.querySelector("buton");
botones.forEach(boton => {
    boton.addEventListener("click", )
});

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

