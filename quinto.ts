const Entrada2 = require('readline-sync');

let media: number = 0;
let valores: number[] = [];

let f = 0
while(f < 10){
   
    let numero
    = parseFloat(Entrada2.question('Digite um valor: '));

    valores.push(numero);

    media = media + valores[f];
    f++
}
console.log(media/10);
console.log(Math.max(...valores));
console.log(Math.min(...valores))