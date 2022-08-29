// Mesa de Trabalho - 01/08/2022 - FRONT END II
// Equipe: Sala 12 (Cauê Silveira e F.Teles)
//array
const numeros = [1, 2, 4, 8];

let contador = 0;
for (i = 0; i < numeros.length; i++) {
    contador += numeros[i];
    console.log(contador);
}

numeros.reduce((accumulated, current) => {
    
    console.log(accumulated + current);
    return accumulated = accumulated + current;

}, 0);