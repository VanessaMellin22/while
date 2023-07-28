const Entrada = require('readline-sync');

let n: number = parseInt(Entrada.question("digite um numero positivo: "))

let i=0

  while(i < n){
    i= i + 2
    console.log(i)
  }



