/*
OPERADORES BITWISE

&(E) -> Mesma lógico do &&, retorna a equivalência dos bits, 1 & 1 = 1, 0 & 0 = 0, 1 & 0 = 0;
1011 = 11
1110 = 14
1010 = 10 
------------
|(OU) -> Mesma lógica do ||, onde tiver pelo menos um sendo 1, ele retornará 1, ou seja 1 | 1 = 1, 0 | 0 = 0, 1 | 0 = 1;
1010 = 10
1011 = 11
1011 = 11
------------
^(OU EXCLUSIVO) -> Só vamos retornar 1, onde tiver o bit 1, se tiver equivalência retornará 0, se não tiver equivalência e tiver o bit 1, retornará 1;
1101 = 13 
1110 = 14 
0011 = 3 
------------
<<(DESLOCAMENTO À ESQUERDA) -> Se fizermos por exemplo:
let n1 = 10
n1 << 1
Ou seja, n1 deslocado para à esquerda em 1, significa que estamos deslocando 1 bit para à esquerda;
00001010 = 10 << 1  // 10 x 2 = 20
00010100 = 20
00010110 = 22 << 2  // 22 x 4 = 88
01011000 = 88
Podemos concluir que, quando fazemos uma operação de bitwise para à esquerda em 1, estamos dobrando o valor, ou seja, multiplicando por 2, se fosse em 2, estariamos quadruplicando, multiplicando por 4, e por ai vai;
-------------
>>(DESLOCAMENTO À DIREITA) -> Mesma lógica do <<, se fizermos:
let n1 = 10
n1 >> 1
Ou seja, n1 deslocado para à direita em 1, significa que estamos deslocando 1 bit para à direita;
00011110 = 30 >> 1  // 30 / 2 = 15
00011111 = 15
00110010 = 50 >> 1  // 50 / 2 = 25
00011001 = 25
00101000 = 40 >> 2  // 40 / 4 = 10
00001010 = 10
Podemos concluir que, quando fazemos uma operação de bitwise para à direita em 1, estamos dividindo o valor, ou seja, dividindo por 2, se fosse em 2, estariamos dividindo por 4, e por ai vai;
*/

let n1 = 40

let res = n1 >> 2

console.log(res) 