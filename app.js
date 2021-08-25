// Group the event listeners together to clean up code....  -->

// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");
// const operators = document.querySelector(".btn__op");


// let currentVal = "";
// let prevVal = "";
// let operator = null;
// let answer = 0;

// buttons.forEach((button) => {
//   button.addEventListener("click", function() {
//     const btnClick = this.innerHTML;
//     display.value = btnClick;
//     console.log(btnClick);

//     if (btnClick === "C") {
//       currentVal = "";
//     } else if (btnClick === "+/-") {
//       currentVal *= -1;
//     } else if (btnClick === ".") {
//       currentVal += ".";
//     } else if (btnClick === "x") {
//       prevVal = currentVal;
//       operation = "*";
//       currentVal = "";
//     } else if (btnClick === "÷") {
//       prevVal = currentVal;
//       operation = "/";
//       currentVal = "";
//     } else if (btnClick === "+") {
//       prevVal = parseFloat(currentVal);
//       operation = "+";
//       currentVal = "";
//     } else if (btnClick === "-") {
//       prevVal = parseFloat(currentVal);
//       operation = "-";
//       currentVal = "";
//     } else if (btnClick === "%") {
//       currentVal /= 100;
//     } else if (btnClick === "=") {
//       result = operate(prevVal, operation, currentVal);
//       operation = null;
//       currentVal = answer;
//     } else if (numbers(btnClick)) {
//       if (currentVal === 0 || currentVal === answer) {
//         currentVal = btnClick;
//       } else {
//         currentVal += btnClick;
//       } 
//     } else if (operators(btnClicked)) {
//       prevVal = currentVal;
//       operation = btnClick;
//       currentVal = "";
//     }
//   });
// });


const display = document.querySelector(".display");
const clear = document.querySelector(".btn__ac");
const numbers = document.querySelectorAll(".btn__no");
const equal = document.querySelector(".btn__eq");
const decimal = document.querySelector(".btn__dec");
const divide = document.querySelector(".btn__op__divide");
const multiply = document.querySelector(".btn__op__multiply");
const minus = document.querySelector(".btn__op__minus");
const add = document.querySelector(".btn__op__add");
const percent = document.querySelector(".btn__func__perc");
const plusMinus = document.querySelector(".btn__func__pm");

let prevVal = "";
let currentVal = "";
let operation = null;

const changeOutput = (number) => {
  display.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const storeValue = e.target.innerHTML;
    currentVal = currentVal + storeValue;
    changeOutput(currentVal);
  });
});

clear.addEventListener("click", () => {
  currentVal = "";
  prevVal = "";
  operation = null;
  changeOutput(0);
});

add.addEventListener("click", () => {
  operation = "+";
  prevVal = currentVal;
  currentVal = "";
});

minus.addEventListener("click", () => {
  operation = "-";
  prevVal = currentVal;
  currentVal = "";
});

multiply.addEventListener("click", () => {
  operation = "x";
  prevVal = currentVal;
  currentVal = "";
});

divide.addEventListener("click", () => {
  operation = "/";
  prevVal = currentVal;
  currentVal = "";
});

percent.addEventListener("click", () => {
  currentVal /= 100;
  changeOutput(currentVal);
});

plusMinus.addEventListener("click", () => {
  currentVal *= -1;
  changeOutput(currentVal);
});

decimal.addEventListener("click",() => {
    if (!currentVal.includes(".")) {
        currentVal += decimal.innerHTML;
        changeOutput(currentVal)
    } else !changeOutput(currentVal)
})

equal.addEventListener("click", () => {
  const answer = getTotal();
  changeOutput(answer);
  currentVal = answer;
  operator = null;
  prevVal = "";
});

const getTotal = () => {
  if (currentVal === "" || prevVal === "") {
    return;
  }
  const parsecurrentVal = parseFloat(currentVal);
  const parseprevVal = parseFloat(prevVal);
  console.log(parsecurrentVal, parseprevVal);
  let answer = 0;

  if (operation == "x") {
    answer = parseprevVal * parsecurrentVal;
    return answer;
  } else if (operation == "+") {
    answer = parseprevVal + parsecurrentVal;
    return answer;
  } else if (operation == "/") {
    answer = parseprevVal / parsecurrentVal;
    return answer;
  } else if (operation == "-") {
    answer = parseprevVal - parsecurrentVal;
    return answer;
  } else return;
};
