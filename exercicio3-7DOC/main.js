/*
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.*/

//Pergunta Inicial
function primeiraPergunta() {
  let respostaUm = prompt(
    "Olá! Tudo bem? Você que estuda tecnologia, pretende seguir para qual área? Digite '1' para Front End ou '2' para Back End"
  );
  //Segunda Parte
  if (respostaUm == 1) {
    respostaTres = prompt(
      "Você quer aprender React ou Vue? Digite o nome da linguagem como está escrito anteriormente"
    );
    segundaPergunta();
  } else if (respostaUm == 2) {
    respostaTres = prompt(
      "Você quer aprender C# ou Java? Digite o nome da linguagem como está escrito anteriormente"
    );
    segundaPergunta();
  } else {
    alert("Você deve responder com 1 ou 2");
    primeiraPergunta();
  }
}
//Terceira Parte
function segundaPergunta() {
  let respostaDois = prompt(
    "Legal que quer aprender " +
      respostaTres +
      "! Agora quer se tornar um dev FullStack ou seguir o que escolheu anteriormente? Digite 1 para FullStack e 2 para seguir com o que escolheu"
  );

  if (respostaDois == 1) {
    alert("Legal, boa sorte para se tornar FullStack");
    perguntaFinal();
  } else if (respostaDois == 2) {
    alert("Boa sorte nos estudos em " + respostaTres + " !");
    perguntaFinal();
  } else {
    alert("Você deve responder com 1 ou 2");
    segundaPergunta();
  }
}
//Quarta parte
function perguntaFinal() {
  let listaLinguagens = [];
  while (listaLinguagens.length < 4) {
    let perguntaQuatro = prompt(
      "Quais tecnologias você gostaria de se aprofundar ou conhecer?"
    );
    if (perguntaQuatro != "") {
      alert("Legal que quer aprender "+ perguntaQuatro +" !");
      listaLinguagens.push(perguntaQuatro);
      perguntaQuatro;
    } else {
      alert("Obrigado!");
    }
  }
  alert("Obrigado!");
}
primeiraPergunta();

