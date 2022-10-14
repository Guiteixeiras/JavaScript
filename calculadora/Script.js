const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //colocar digito na tela
  addDigit(digit) {
    //ver se ja tem 1 ponto, para não ter mais
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  //processar todas operações
  processOperator(operation) {
    //checar o valor current
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      //mudança de operação
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }


    //pegar valor atual e anterior 
    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperation();
        break;
      case "C":
        this.processClear();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }

  //mudar o valor na tela
  updateScreen(operationValue = null,
    operation = null,
    current = null,
    previous = null) {

    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      //checar se o valor é zero, se for...apenas adicionar o valor
      if (previous === 0) {
        operationValue = current
      }
      //jogar o resultado pra cima
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

  //mudar a operação da matematica
  changeOperation(operation) {
    const mathOperations = ["*", "-", "+", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }
    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  //deletar o ultimo numero
  processDelOperator() {
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
  }

  //limpar a operação
  processClearCurrentOperation() {
    this.currentOperationText.innerText = ""
  }

  //limpar tudo
  processClear() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }

  //processo de igual
  processEqualOperator() {
    let operation = this.previousOperationText.innerText.split(" ")[1];

    this.processOperator(operation);
  }
}


const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperator(value);
    }
  });
});
