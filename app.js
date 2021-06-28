// let currentVal = "";
// let prevVal = "";
// let operator = null;
// let answer = 0;

// buttons.forEach((button) => {
//   button.addEventListener("click", () {
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
//       prevEntry = parseFloat(currentVal);
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
//     } else if (btnClick = numbers) {
//       if (currentVal === 0 || currentVal === answer) {
//         currentVal = btnClick;
//       } else {
//         currentVal += btnClick;
//       }
//     }
//   });
// });

// for (let i = 0; i < operators.length; i++) {
//   operators[i].addEventListener("click", () => {
//     if (operators[i].innerHTML == "-") {
//       operation = "-";
//       prevVal = currentVal;
//       currentVal = "";
//     } else if (operators[i].innerHTML == "+") {
//       operation = "+";
//       prevVal = currentVal;
//       currentVal = "";
//     } else if (operators[i].innerHTML == "x") {
//       operation = "x";
//       prevVal = currentVal;
//       currentVal = "";
//     } else if (operators[i].innerHTML == "÷") {
//       operation = "/";
//       prevVal = currentVal;
//       currentVal = "";
//     } else return;
//   });
// }

const display = document.querySelector(".display");
const clear = document.querySelector(".btn__ac");
const numbers = document.querySelectorAll(".btn__no");
const equal = document.querySelector(".btn__eq");
const decimal = document.querySelector(".btn__dec");
const divide = document.querySelector(".btn__op__divide");
const multiply = document.querySelector(".btn__op__multiply");
const minus = document.querySelector(".btn__op__minus");
const add = document.querySelector(".btn__op__add");
const percent = document.querySelector(".btn__func__perc")
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

multiply.addEventListener("click", () => {
  operation = "x";
  prevVal = currentVal;
  currentVal = "";
});

add.addEventListener("click", () => {
  operation = "+";
  prevVal = currentVal;
  currentVal = "";
});

divide.addEventListener("click", () => {
  operation = "/";
  prevVal = currentVal;
  currentVal = "";
});

minus.addEventListener("click", () => {
  operation = "-";
  prevVal = currentVal;
  currentVal = "";
});

percent.addEventListener("click", () => {
    currentVal /= 100;
    changeOutput(currentVal);
})

plusMinus.addEventListener("click", () => {
    currentVal *= -1
    changeOutput(currentVal)
})


equal.addEventListener("click", () => {
  const total = getTotal();
  changeOutput(total);
  currentVal = total;
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
  let total = 0;

  if (operation == "x") {
    total = parseprevVal * parsecurrentVal;
    return total;
  } else if (operation == "+") {
    total = parseprevVal + parsecurrentVal;
    return total;
  } else if (operation == "/") {
    total = parseprevVal / parsecurrentVal;
    return total;
  } else if (operation == "-") {
    total = parseprevVal - parsecurrentVal;
    return total;
  } else return;
};


// decimal.addEventListener("click", () => {
//     if (e.target.innerHTML === "." && !hasDecimal) {
//           hasDecimal = true;
//           displayOnScreen
//       } else if (e.target.innerHTML === "." && hasDecimal) {
//           return;
//       }
// });
