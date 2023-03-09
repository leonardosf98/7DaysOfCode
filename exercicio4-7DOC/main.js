/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/

let numeroAleatorio = Math.floor(Math.random() * 11);
let listaErro = [];
console.log(numeroAleatorio);

function refazPergunta() {
  let resposta = prompt(
    "Qual número você acha que eu escolhi? Digite um número entre 0 e 10"
  );
  let tentativas = [];

  while (resposta != numeroAleatorio && tentativas.length < 2) {
    resposta = prompt(
      "Qual número você acha que eu escolhi? Digite um número entre 0 e 10"
    );
    tentativas.push(1);
  }
  if (resposta == numeroAleatorio) {
    alert("Parabéns! Você acertou!");
  } else
    alert("Que pena, você não conseguiu, atualiza a página e tente novamente");
}
refazPergunta();
