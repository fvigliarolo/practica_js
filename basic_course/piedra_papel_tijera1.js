 let jugada = "string"
 let jugada_bot = "string"
 let numero = Number

 function gana(){
   return console.log("GANASTE")
 }

 function empate(){
    return console.log("EMPATE")
  }

  function pierde(){
    return console.log("PERDISTE")
  }

 function jugar(jugada, numero){

    if(numero == 1){
        jugada_bot = "piedra"
    }else if(numero == 2){
        jugada_bot = "papel"
    }else{
        jugada_bot = "tijera"
    }

    jugada == "papel"  && jugada_bot == "piedra" ? gana() :
    jugada == "papel" && jugada_bot == "papel"  ? empate() :
    jugada == "papel" && jugada_bot == "tijera" ? pierde() :
    jugada == "piedra" && jugada_bot == "piedra" ? empate() :
    jugada == "piedra" && jugada_bot == "papel" ? pierde() :
    jugada == "piedra" && jugada_bot == "tijera" ? gana() :
    jugada == "tijera" && jugada_bot == "piedra" ? pierde() :
    jugada == "tijera" && jugada_bot == "papel" ? gana(): empate()


 }