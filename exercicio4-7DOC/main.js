/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/
let numeroAleatorio = Math.floor(Math.random() * 11);
let listaErro = [];

function perguntaPrincipal() {
  let escolhaNumero = prompt(
    "Qual número você acha que eu escolhi? Digite um número entre 0 e 10"
  );
  if (escolhaNumero == numeroAleatorio) {
    alert("Parabéns, você acertou!");
  } else {
    escolhaNumero = prompt(
      "Qual número você acha que eu escolhi? Digite um número entre 0 e 10"
    );
    verificaNumero(escolhaNumero);
  }
}
function verificaNumero(escolhaNumero) {
  if (escolhaNumero == numeroAleatorio) {
    return true;
  } else {
    return false;
  }
}

perguntaPrincipal();
