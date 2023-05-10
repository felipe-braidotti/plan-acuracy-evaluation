let answersGroupOne = [0, 0];
let weightsGroupOne = [0.12, 0.08];
let resultsGroupOne = [0, 0];

let answersGroupTwo = [0, 0];
let weightsGroupTwo = [0.1, 0.1];
let resultsGroupTwo = [0, 0];

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

function calculateTotal() {
  // Função utilizada para calcular o resultado geral da pontuação.
  resultTotal =
    resultsGroupOne[0] +
    resultsGroupOne[1] +
    resultsGroupTwo[0] +
    resultsGroupTwo[1];

  return resultTotal;
}

function switchButton(switchID, selectorID) {
  let questionEnabled = document.querySelector(`#${switchID}`);
  let selectInput = document.querySelector(`#${selectorID}`);
  document.getElementById(selectorID).value = "";
  selectInput.toggleAttribute("disabled");
  console.log(questionEnabled.checked);
}

function calculateG1(questionNumber, answerID) {
  // função que receba qual é a questão do Grupo 1
  answersGroupOne[questionNumber - 1] = document.getElementById(answerID).value;
  resultsGroupOne[questionNumber - 1] = questionResult(
    answersGroupOne[questionNumber - 1],
    weightsGroupOne[questionNumber - 1]
  );
  console.log(
    `Resultado da Questão ${questionNumber}: `,
    resultsGroupOne[questionNumber - 1]
  );
  console.log(calculateTotal());
}

function calculateQ3() {
  answersGroupTwo[0] = document.getElementById("answerThree").value;
  answersGroupTwo[1] = document.getElementById("answerFour").value;
  if (answersGroupTwo[1] === "4") {
    weightsGroupTwo[0] = 0.2;
    weightsGroupTwo[1] = 0;
  } else {
    weightsGroupTwo[0] = 0.1;
    weightsGroupTwo[1] = 0.1;
  }
  resultsGroupTwo[0] = questionResult(answersGroupTwo[0], weightsGroupTwo[0]);
  resultsGroupTwo[1] = questionResult(answersGroupTwo[1], weightsGroupTwo[1]);

  console.log(`Resultado da Questão 03: `, resultsGroupTwo[0]);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}

function calculateQ4() {
  answersGroupTwo[1] = document.getElementById("answerFour").value;
  if (answersGroupTwo[1] === "4") {
    weightsGroupTwo[0] = 0.2;
    weightsGroupTwo[1] = 0;
  } else {
    weightsGroupTwo[0] = 0.1;
    weightsGroupTwo[1] = 0.1;
  }
  resultsGroupTwo[0] = questionResult(answersGroupTwo[0], weightsGroupTwo[0]);
  resultsGroupTwo[1] = questionResult(answersGroupTwo[1], weightsGroupTwo[1]);
  console.log(`Resultado da Questão 04: `, resultsGroupTwo[1]);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}
