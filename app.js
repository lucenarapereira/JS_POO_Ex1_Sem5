/*Exercicio 1 da lista */

class Retangulo {
    constructor (L, a) {
        this.largura = L
        this.altura = a
    }
}

const retA = new Retangulo(3)

console.log(Json.stringify(retA))

/*vetor de arrays, pode ser for ou push, ou:*/
 const retangulos = []

 retangulos.push (new Retangulo (3,4))
 retangulos.push (new Retangulo (7,2))
 retangulos.push (new Retangulo (5,1))

 console.log(Json.stringify(retangulos))


