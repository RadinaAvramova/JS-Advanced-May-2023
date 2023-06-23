function solve() {
  // constants
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  // capture elements
  const inputValueByLowerCase = document
    .getElementById("text")
    .value.toLowerCase();
  const currentCaseValue = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  // validate case
  if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
    result.textContent = "Error!";
    return;
  }

  //
  const arrOfStr = inputValueByLowerCase.split(" ");
  let ouput = "";
  let startingPoint = 0;

  if (currentCaseValue === CAMEL_CASE) {
    ouput += arrOfStr[0];
    startingPoint = 1;
  }

  for (let i = startingPoint; i < arrOfStr.length; i++) {
    const currentWord = arrOfStr[i];

    ouput +=
      currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);

    result.textContent = ouput;
  }
}

function solve() {
  const text = document.getElementById("text").value;
  const naming = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");

  const splitted = text.split(" ");

  // resultString must be assigned with let, otherwise can not be modified
  let resultString = "";

  if (naming == "Pascal Case") {
    for (let i = 0; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    // resultContainer must receive final value
    resultContainer.textContent = resultString;
  } else if (naming == "Camel Case") {
    resultString += splitted[0][0].toLowerCase()
      + splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let i = 1; i < splitted.length; i++) {
      resultString += splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase();
    }
    // resultContainer must receive final value
    resultContainer.textContent = resultString;
  } else {
    // resultContainer.textContent() = resultString;
    resultContainer.textContent = "Error!";
  }
}
