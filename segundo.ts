const entrada = require('readline-sync');

let z:number = 0;

let p = 0
while( p < 5){
    p++
    let m:number = parseFloat(entrada.question('Digite a nota: '));
    z = m + z;
}
console.log('Média: ' + z / 5);