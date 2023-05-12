let answersGroupOne = [0, 0];
let weightsGroupOne = [0.12, 0.08];
let resultsGroupOne = [0, 0];

let answersGroupTwo = [0, 0];
let weightsGroupTwo = [0.1, 0.1];
let resultsGroupTwo = [0, 0];

let answersGroupThree = [0, 0, 0];
let weightsGroupThree = [0.08, 0.06, 0.06];
let resultsGroupThree = [0, 0, 0];

let answersGroupFour = [0, 0, 0, 0];
let weightsGroupFour = [0.05, 0.05, 0.05, 0.05];
let resultsGroupFour = [0, 0, 0, 0];
let switchesGroupFour = [true, true, true];

let answersGroupFive = [0, 0, 0];
let weightsGroupFive = [0.06, 0.1, 0.04];
let resultsGroupFive = [0, 0, 0];

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
    resultsGroupThree[2] +
    resultsGroupFour[0] +
    resultsGroupFour[1] +
    resultsGroupFour[2] +
    resultsGroupFour[3] +
    resultsGroupFive[0] +
    resultsGroupFive[1] +
    resultsGroupFive[2];

  return resultTotal;
}

function switchButtonGroupTwo(switchID, selectorID, questionNumber) {
  let questionEnabled = document.querySelector(`#${switchID}`);
  let selectInput = document.querySelector(`#${selectorID}`);
  resultsGroupTwo[1] = document.getElementById(selectorID).value = "";
  selectInput.toggleAttribute("disabled");
  console.log(questionEnabled.checked);
  calculateG2(questionNumber);
}

function switchButtonGroupFour(switchID, selectorID, questionNumber, answerID) {
  let questionEnabled = document.querySelector(`#${switchID}`);
  let selectInput = document.querySelector(`#${selectorID}`);

  selectInput.toggleAttribute("disabled");
  switchesGroupFour[questionNumber - 9] = questionEnabled.checked;
  if (switchesGroupFour[questionNumber - 9] === false) {
    resultsGroupFour[questionNumber - 8] = document.getElementById(
      selectorID
    ).value = "";
  }
  console.log(switchesGroupFour[questionNumber - 9]);
  console.log(switchesGroupFour);
  calculateG4(questionNumber, answerID);
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
  // função que receba qual é a questão do Grupo 2
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
  // função que receba qual é a questão do Grupo 3
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

function calculateG4(questionNumber, answerID) {
  totalTrue = 0;
  for (let i = 0; i < switchesGroupFour.length; i++) {
    if (switchesGroupFour[i] === true) {
      totalTrue += 1;
    }
  }
  console.log(`totalTrue =`, totalTrue);
  if (totalTrue === 0) {
    weightsGroupFour = [0.2, 0, 0, 0];
    console.log("Peso total do grupo vai para a questão 8");
    console.log(weightsGroupFour);
  } else if (totalTrue === 1) {
    weightsGroupFour[0] = 0.1;
    console.log("Peso do grupo vai para a questão 8 e mais UMA");
    for (let i = 0; i < switchesGroupFour.length; i++) {
      if (switchesGroupFour[i] === true) {
        weightsGroupFour[i + 1] = 0.1;
      } else if (switchesGroupFour[i] === false) {
        weightsGroupFour[i + 1] = 0;
      }
    }
    console.log(weightsGroupFour);
  } else if (totalTrue === 2) {
    weightsGroupFour[0] = 0.07;
    console.log("Peso do grupo vai para a questão 8 e mais DUAS");

    for (let i = 0; i < switchesGroupFour.length; i++) {
      if (switchesGroupFour[i] === true) {
        weightsGroupFour[i + 1] = 0.065;
      } else if (switchesGroupFour[i] === false) {
        weightsGroupFour[i + 1] = 0;
      }
    }
    console.log(weightsGroupFour);
  } else if (totalTrue === 3) {
    weightsGroupFour = [0.05, 0.05, 0.05, 0.05];
    console.log("Peso do grupo vai para todas as questões");
    console.log(weightsGroupFour);
  }

  answersGroupFour[questionNumber - 8] =
    document.getElementById(answerID).value;
  resultsGroupFour[questionNumber - 8] = questionResult(
    answersGroupFour[questionNumber - 8],
    weightsGroupFour[questionNumber - 8]
  );

  console.log(
    `Resultado da Questão ${questionNumber}: `,
    resultsGroupFour[questionNumber - 8]
  );
  console.log(calculateTotal());
}

function calculateG5(questionNumber, answerID) {
  // função que receba qual é a questão do Grupo 5
  answersGroupFive[questionNumber - 12] =
    document.getElementById(answerID).value;
  resultsGroupFive[questionNumber - 12] = questionResult(
    answersGroupFive[questionNumber - 12],
    weightsGroupFive[questionNumber - 12]
  );
  console.log(
    `Resultado da Questão ${questionNumber}: `,
    resultsGroupFive[questionNumber - 12]
  );
  console.log(calculateTotal());
}
