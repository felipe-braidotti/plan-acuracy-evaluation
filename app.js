var maintenancePlan = {
  groupOne: {
    answerOne: document.getElementById("answerOne").value,
    weightOne: 0.12,
  },
};

function groupOneResult(a1, p1) {
  if (a1 === "1") {
    x1 = 1;
  } else {
    x1 = 0.5;
  }
  return x1 * p1;
}

function calcular() {
  console.log(
    groupOneResult(
      maintenancePlan.groupOne.answerOne,
      maintenancePlan.groupOne.weightOne
    )
  );
  console.log(maintenancePlan.groupOne.answerOne);
}
