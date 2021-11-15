var animales = []

animales = [
    {nombre: "pedro",tipo:"perro"},
    {nombre: "juan", tipo:"gato"},
    {nombre: "ana", tipo:"perro"},
    {nombre: "majo", tipo: "x"}
]

var animal = animales.filter(function(animal){
    return animal.tipo == "perro"
});


var animal2 = animales.map(function(animale){
    return animale.nombre
});

var encuentra_animal = animales.find(function(animal){
    return animal.tipo ==="gato"
});


animales.forEach(function(animal){
    console.log(animal.nombre)
});

var existe_animal = animales.some(function(animal){
    return animal.tipo === "perro"
});