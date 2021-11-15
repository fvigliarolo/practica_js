var jugada = "string"
var jugada_bot = "string"
let numero = Number

function gana(){console.log("GANASTE")}
function empate(){console.log("EMPATE")}
function pierde(){console.log("PERDISTE")}

function jugar(jugada, numero){
    switch (numero){
        case 1: jugada_bot = "piedra"
            break;
        case 2: jugada_bot = "papel"
            break;
        case 3: jugada_bot = "tijera"
            break;

        }
    switch (jugada){
        case "piedra": 
            switch(jugada_bot){
                case "piedra": empate()
                    break;
                case "papel": pierde()
                    break;
                case "tijera": gana()
                    break;
            }
            break;
        case "papel":
            switch(jugada_bot){
                case "piedra": gana()
                    break;
                case "papel": empate()
                    break;
                case "tijera": pierde()
                    break;
            }
            break;
        case "tijera":
            switch(jugada_bot){
                case "piedra": pierde()
                    break;
                case "papel": gana()
                    break;
                case "tijera": empate()
                    break;
            }

    }
}



