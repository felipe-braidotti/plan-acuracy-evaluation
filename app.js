let weightsGroupOne = [0.12, 0.08];
let resultsGroupOne = [0, 0];
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
  let answerOne = document.getElementById("answerOne").value;
  let resultOne = questionResult(answerOne, weightsGroupOne[0]);
  resultsGroupOne[0] = resultOne;
  console.log(`Resultado da Questão 01: `, resultOne);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}

function calculateQ2() {
  let answerTwo = document.getElementById("answerTwo").value;
  let resultTwo = questionResult(answerTwo, weightsGroupOne[1]);
  resultsGroupOne[1] = resultTwo;
  console.log(`Resultado da Questão 02: `, resultTwo);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}

function calculateQ3() {
  let answerThree = document.getElementById("answerThree").value;
  let resultThree = questionResult(answerThree, weightsGroupTwo[0]);
  resultsGroupTwo[0] = resultThree;
  console.log(`Resultado da Questão 03: `, resultThree);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}

function calculateQ4() {
  let answerFour = document.getElementById("answerFour").value;
  let resultFour = questionResult(answerFour, weightsGroupTwo[1]);
  resultsGroupTwo[1] = resultFour;
  console.log(`Resultado da Questão 04: `, resultFour);
  console.log(
    resultsGroupOne[0] +
      resultsGroupOne[1] +
      resultsGroupTwo[0] +
      resultsGroupTwo[1]
  );
}
