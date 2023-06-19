/* 
PÓS INCREMENTO/DECREMENTO

let n = 10
n++ ou n--
console.log(n) = 11
Sempre que colocarmos o ++/-- à direita do valor estamos incrementando/decrementando em 1, portando, sempre que a operação estiver à direta da variável, ela é chamada de pós incremento/decremento, então nós usamos o valor e depois incrementamos/decrementamos;
Vamos incrementar neste exemplo, agora se fizermos:
let n = 10
console.log(n++)
O resultado será 10, pois ele pega da esquerda pra direita, então primeiro ele imprime o 10 e depois incrementa, então se mostrarmos a variável n novamente:
console.log(n++) = 10
console.log(n) = 11
neste caso será mostrado o 11, pois ele incrementou depois;
------------
PRÉ INCREMENTO/DECREMENTO

No pré incremento/decremento sempre que colocarmos o ++/-- à esquerda do valor também estamos incrementando/decrementando em 1, porém com a diferença de que no pré incremento/decremento como o script é lido da esquerda pra direita, ele vai incrementar/decrementar direto, vamos incrementar neste exemplo:
let n = 10
console.log(++n) = 11
Então ele incrementou em 1 e já mostrou seu valor incrementado;
------------
ATRIBUIÇÃO JUNTO COM OPERAÇÃO
let n = 10
n+=10
console.log(n)
Neste caso estamos atribuindo o valor da variável nela mesma e ao mesmo tempo somando à um número qualquer, então é o mesmo que n = n + 10;
*/

let n = 10

console.log(n+=10)