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

function calculateQ1() {
  answersGroupOne[0] = document.getElementById("answerOne").value;
  resultsGroupOne[0] = questionResult(answersGroupOne[0], weightsGroupOne[0]);
  console.log(`Resultado da Questão 01: `, resultsGroupOne[0]);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}

function calculateQ2() {
  answersGroupOne[1] = document.getElementById("answerTwo").value;
  resultsGroupOne[1] = questionResult(answersGroupOne[1], weightsGroupOne[1]);
  console.log(`Resultado da Questão 02: `, resultsGroupOne[1]);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
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
