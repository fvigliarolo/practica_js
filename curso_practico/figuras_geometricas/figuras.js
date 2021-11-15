class cuadrado {
    constructor(lado) {
        this.area = lado * lado
        this.perimetro = lado * 4

    }
}

class triangulo {
    constructor(lado_A, lado_B, base, altura) {
        this.base = base
        this.lado_A = lado_A
        this.lado_B = lado_B
        this.altura = altura
        this.perimetro = (Number(lado_A) + Number(lado_B) + Number(base))
        this.area = (base * altura) / 2
    }


}

class circulo {
    constructor(radio) {
        this.radio = radio
        this.perimetro = Number(radio) * 2 * Math.PI
        this.area = (Number(radio)**2) * Math.PI
    }
}

function crear_cuadrado(accion){
    var medida_lado = document.getElementById("lado_medida").value
    var result = new cuadrado(medida_lado)
    accion == 'area' ? console.log(result.area) : console.log(result.perimetro)
}

function crear_figura(figura, accion){
    switch (figura) {
        case 'cuadrado':
            var medida_lado = document.getElementById("lado_medida").value
            var result = new cuadrado(medida_lado)
            break;

        case 'triangulo':
            var lado1 = document.getElementById("lado1_medida").value
            var lado2 = document.getElementById("lado2_medida").value
            var lado3 = document.getElementById("lado3_medida").value
            var altura = document.getElementById("altura_medida").value
            var result = new triangulo(lado1, lado2, lado3, altura)
            break;

        case 'circulo':
            var radio = document.getElementById("radio_medida").value
            var result = new circulo(radio)
            break;
    }
    accion == 'area' ? console.log(result.area) : console.log(result.perimetro)
}


function isosceles(){
    checkbox = document.getElementById("isosceles")
    altura = document.getElementById("altura_medida")
    label_altura = document.getElementById("altura")
    
    checkbox.checked == true ? (altura.hidden = true, label_altura.hidden = true): (altura.hidden = false, label_altura.hidden = false)
    // alert(checkbox.value)

}