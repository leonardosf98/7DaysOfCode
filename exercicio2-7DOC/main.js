function interacao() {
  nameUser = prompt("Qual seu nome?");
  ageUser = prompt("Quantos anos você tem?");
  languageUser = prompt("Qual linguagem de programação você está estudando?");

  if (nameUser == "" || ageUser == "" || languageUser == "") {
    let paragraph = document.getElementsByTagName("p");
    alert("Recarregue a página e responda as perguntas");
  } else
    alert(
      "Olá " +
        nameUser +
        " você tem " +
        ageUser +
        " anos e já está aprendendo " +
        languageUser +
        "!"
    );
  gostar();
}

interacao();
function gostar() {
  let enjoy = prompt(
    "Você gosta de estudar " +
      languageUser +
      "? Responda apenas com 1 para sim ou 2 para não"
  );
  if (enjoy == "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }
}
