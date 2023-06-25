// VARIABLES y DOM

const expresionRegular = /[+\-*/%]/; 
let num1, num2;
let operador;
let input; //string mostrado en la pantalla de la calc, luego se procesara y se dividira en num1, num2 y operador
const pantalla = document.querySelector(".contenedor-datos");
const botones = document.querySelectorAll("button");

// EVENT LISTENERS

if ("ontouchstart" in document.documentElement)
    {
        //console.log("your device is a touch screen device.");
        botones.forEach(boton => {
          boton.addEventListener("touchstart", mostrarEnPantalla);
      });
    }
    else
    {
      //console.log("your device is NOT a touch device");
      botones.forEach(boton => {
        boton.addEventListener("click", mostrarEnPantalla);
    });
    }


// FUNCIONES QUE INTERACTUAN CON LA INFO DE LA CALCULADORA

function mostrarEnPantalla(e){
    let valorBoton = e.target.textContent;
    let nums;

    switch(valorBoton){

        case "AC": borrarTodo(); valorBoton = ""; break;

        case "C": borrarUno(); valorBoton = ""; break;

        case "=": 
                  mostrarResultado(pantalla.textContent);            
                  valorBoton = ""; 
                  break;

        case "+": nums = pantalla.textContent.split(expresionRegular).filter(Boolean); 
                  if(nums.length > 1){
                    console.log(nums, nums[1]);
                    mostrarResultado(pantalla.textContent);
                  } break;

        case "-": nums = pantalla.textContent.split(expresionRegular).filter(Boolean); 
                  if(nums.length > 1){
                    console.log(nums, nums[1]);
                    mostrarResultado(pantalla.textContent);
                  }
        case "*": nums = pantalla.textContent.split(expresionRegular).filter(Boolean); 
                  if(nums.length > 1){
                    console.log(nums, nums[1]);
                    mostrarResultado(pantalla.textContent);
                  }
        case "/": nums = pantalla.textContent.split(expresionRegular).filter(Boolean); 
                  if(nums.length > 1){
                    console.log(nums, nums[1]);
                    mostrarResultado(pantalla.textContent);
                  }
        case "%": nums = pantalla.textContent.split(expresionRegular).filter(Boolean); 
                  if(nums.length > 1){
                    console.log(nums, nums[1]);
                    mostrarResultado(pantalla.textContent);
                  }          
    }

    if(valorBoton === "." && pantalla.textContent.includes(".")){
        valorBoton = "";
    }

    if(valorBoton === "+" || valorBoton === "-" || valorBoton === "*" || valorBoton === "/" || valorBoton === "%"){

        if(pantalla.textContent.slice(-1) === "+" || pantalla.textContent.slice(-1) === "-" || pantalla.textContent.slice(-1) === "*" || pantalla.textContent.slice(-1) === "/"){
            valorBoton = "";
        }
    }

    document.activeElement.blur(); //para quitar el focus y que no de prolemas el pulsar la tecla "Enter"
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
    let resultado;
  if (num2 !== 0) {
    resultado = num1 / num2;
    return resultado;
  } else {
    return "Operación inválida";
  }
}

function mod(num1, num2){
    return num1 % num2;
}

function operacion(num1, num2, operador){
    let resultado;

    switch(operador){
        case "+": resultado = suma(num1, num2); break;
        case "-": resultado = resta(num1, num2); break;
        case "*": resultado = multiplicacion(num1, num2); break;
        case "/": resultado = division(num1, num2); break;
        case "%": resultado = mod(num1, num2); 
    }

    return resultado;
}

function mostrarResultado(datos){
  console.log(datos);
    if(datos !== "\n\n        " || !datos){
      let nums = datos.split(expresionRegular); 
      if(nums.length >= 1){
          num1 = parseFloat(nums[0]); 
          num2 = parseFloat(nums[1]);

          const operador = datos.match(expresionRegular)[0];

          console.log(num1, num2, operador);

          
          const resultado = operacion(num1, num2, operador);
          if(Number.isNaN(resultado)){        
            pantalla.textContent = "Operación inválida";
          }
          else{
            console.log(resultado);
            pantalla.textContent = resultado;
          }
          
      }

    }
    else{
      console.log("la pantalla de datos está vacia");
    }
}

// FUNCIONALIDAD PARA QUE SE ADMITA LA ENTRADA DE TECLADO

window.addEventListener("keydown", function(e) {
  const key = document.querySelector('.key[data-key="' + e.key + '"]');
    if(key !== null){

      switch(e.key){
        case "Delete": pantalla.textContent = ""; break;
        case "Backspace": pantalla.textContent = pantalla.textContent.slice(0, -1); break
        case "+": if(!pantalla.textContent.includes("+")){
                  pantalla.textContent += key.textContent; break;
                } break;
        case "-": if(!pantalla.textContent.includes("-")){
                  pantalla.textContent += key.textContent; break;
                } 
        break;
        case ".": if(!pantalla.textContent.includes(".")){
          pantalla.textContent += key.textContent;; break;
      } break;
        case "Enter": mostrarResultado(pantalla.textContent); break;
        default: pantalla.textContent += key.textContent;
      }
        

    }

});