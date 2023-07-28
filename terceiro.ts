const tab = require('readline-sync');

let number: number = parseFloat(tab.question('digite um numero: '))

let l = 0
while(l < number * 10){
    l = l + number
    console.log(l)
}
