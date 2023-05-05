let weightOne = 0.12;
let weightTwo = 0.08;
let resultsGroupOne = [0, 0];

function questionResult(answer, weight) {
  if (answer === "1") {
    x1 = 1;
  } else if (answer === "2") {
    x1 = 0.5;
  } else {
    x1 = 0;
  }
  return x1 * weight;
}

// document.getElementById("answerOne").addEventListener("select", calcular());

function calculateQ1() {
  let answerOne = document.getElementById("answerOne").value;
  let resultOne = questionResult(answerOne, weightOne);
  resultsGroupOne[0] = resultOne;
  console.log(`Resultado da Questão 01: `, resultOne);
  console.log(resultsGroupOne[0] + resultsGroupOne[1]);
}

function calculateQ2() {
  let answerTwo = document.getElementById("answerTwo").value;
  let resultTwo = questionResult(answerTwo, weightTwo);
  resultsGroupOne[1] = resultTwo;
  console.log(`Resultado da Questão 02: `, resultTwo);
  console.log(resultsGroupOne[0] + resultsGroupOne[1]);
}
