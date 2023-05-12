let answersGroupOne = [0, 0];
let weightsGroupOne = [0.12, 0.08];
let resultsGroupOne = [0, 0];

let answersGroupTwo = [0, 0];
let weightsGroupTwo = [0.1, 0.1];
let resultsGroupTwo = [0, 0];

let answersGroupThree = [0, 0, 0];
let weightsGroupThree = [0.08, 0.06, 0.06];
let resultsGroupThree = [0, 0, 0];

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
    resultsGroupTwo[1] +
    resultsGroupThree[0] +
    resultsGroupThree[1] +
    resultsGroupThree[2];

  return resultTotal;
}

function switchButton(switchID, selectorID, questionNumber) {
  let questionEnabled = document.querySelector(`#${switchID}`);
  let selectInput = document.querySelector(`#${selectorID}`);
  resultsGroupTwo[1] = document.getElementById(selectorID).value = "";
  selectInput.toggleAttribute("disabled");
  console.log(questionEnabled.checked);
  calculateG2(questionNumber);
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

function calculateG2(questionNumber) {
  answersGroupTwo[0] = document.getElementById("answerThree").value;
  answersGroupTwo[1] = document.getElementById("answerFour").value;
  if (answersGroupTwo[1] === "") {
    weightsGroupTwo[0] = 0.2;
    weightsGroupTwo[1] = 0;
  } else {
    weightsGroupTwo[0] = 0.1;
    weightsGroupTwo[1] = 0.1;
  }
  resultsGroupTwo[0] = questionResult(answersGroupTwo[0], weightsGroupTwo[0]);
  resultsGroupTwo[1] = questionResult(answersGroupTwo[1], weightsGroupTwo[1]);

  console.log(
    `Resultado da Questão ${questionNumber}: `,
    resultsGroupTwo[questionNumber - 3]
  );
  console.log(calculateTotal());
}

function calculateG3(questionNumber, answerID) {
  // função que receba qual é a questão do Grupo 1
  answersGroupThree[questionNumber - 5] =
    document.getElementById(answerID).value;
  resultsGroupThree[questionNumber - 5] = questionResult(
    answersGroupThree[questionNumber - 5],
    weightsGroupThree[questionNumber - 5]
  );
  console.log(
    `Resultado da Questão ${questionNumber}: `,
    resultsGroupThree[questionNumber - 5]
  );
  console.log(calculateTotal());
}
