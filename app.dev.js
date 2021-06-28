"use strict";

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
var display = document.querySelector(".display");
var clear = document.querySelector(".btn__ac");
var numbers = document.querySelectorAll(".btn__no");
var equal = document.querySelector(".btn__eq");
var decimal = document.querySelector(".btn__dec");
var divide = document.querySelector(".btn__op__divide");
var multiply = document.querySelector(".btn__op__multiply");
var minus = document.querySelector(".btn__op__minus");
var add = document.querySelector(".btn__op__add");
var percent = document.querySelector(".btn__func__perc");
var plusMinus = document.querySelector(".btn__func__pm");
var prevVal = "";
var currentVal = "";
var operation = null;

var changeOutput = function changeOutput(number) {
  display.value = number;
};

numbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    var storeValue = e.target.innerHTML;
    currentVal = currentVal + storeValue;
    changeOutput(currentVal);
  });
});
clear.addEventListener("click", function () {
  currentVal = "";
  prevVal = "";
  operation = null;
  changeOutput(0);
});
add.addEventListener("click", function () {
  operation = "+";
  prevVal = currentVal;
  currentVal = "";
});
minus.addEventListener("click", function () {
  operation = "-";
  prevVal = currentVal;
  currentVal = "";
});
multiply.addEventListener("click", function () {
  operation = "x";
  prevVal = currentVal;
  currentVal = "";
});
divide.addEventListener("click", function () {
  operation = "/";
  prevVal = currentVal;
  currentVal = "";
});
percent.addEventListener("click", function () {
  currentVal /= 100;
  changeOutput(currentVal);
});
plusMinus.addEventListener("click", function () {
  currentVal *= -1;
  changeOutput(currentVal);
}); // decimal.addEventListener("click", () => {
//     if (e.target.innerHTML === "." && !hasDecimal) {
//           hasDecimal = true;
//           displayOnScreen
//       } else if (e.target.innerHTML === "." && hasDecimal) {
//           return;
//       }
// });

equal.addEventListener("click", function () {
  var answer = getTotal();
  changeOutput(answer);
  currentVal = answer;
  operator = null;
  prevVal = "";
});

var getTotal = function getTotal() {
  if (currentVal === "" || prevVal === "") {
    return;
  }

  var parsecurrentVal = parseFloat(currentVal);
  var parseprevVal = parseFloat(prevVal);
  console.log(parsecurrentVal, parseprevVal);
  var answer = 0;

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