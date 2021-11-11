var num1 = "";
var num2 = "";
var ans = "";
var operator = "";
var isNum1 = true;
var isDot = false;
var memoryNum = ""; // only used when pressing "=" twice
var memoryOperator = ""; // only used when pressing "=" twice
var memoryAns = ""; // only used when pressing "=" twice

var equalButton = document.getElementById("equals");
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operator");
var opsButtonsArray = Object.assign([], operators);
var displayEl = document.getElementsByClassName("calculator__display")[0];
//added:
var allDisplay = document.getElementsByClassName("dis");
var hexaDis = document.getElementsByClassName("hexa__display")[0];
var octaDis = document.getElementsByClassName("octa__display")[0];
var binDis = document.getElementsByClassName("bin__display")[0];

//base mode (DEC BIN OCT HEX)
var decMode = document.getElementById("decMode");
var binMode = document.getElementById("binMode");
var hexMode = document.getElementById("hexMode");
var octMode = document.getElementById("octMode");

var notOct = document.getElementsByClassName("notOct");
var notBin = document.getElementsByClassName("notBin");
var letterBtn = document.getElementsByClassName("letterBtn");
var bitOp = document.getElementsByClassName("bitOp");
var bitOpArray = Object.assign([], bitOp);

var baseBtn = document.getElementsByClassName("baseBtn");

var inputMode = "dec" // dec   bin   oct   hex
var baseNum = 10;


var numButtonsArray = Object.assign([], numbers);
var clearBtn = document.getElementsByClassName("clear")[0];

var digit = document.getElementsByClassName("calculator__display dis")[0];

var sciBtn = document.getElementsByClassName("sci");

var decPoint = document.getElementById("decimal");


var sciMode = document.getElementById("sciMode");
var baseMode = document.getElementById("baseMode");
var progMode = document.getElementById("progMode");
var progInter = document.getElementsByClassName("progInter");



function decOn(){
  inputMode = "dec";
  console.log("decMode: " + inputMode);
  baseBtnOff()
  decMode.style.fontWeight = "bold";
  decMode.style.fontWeight = "bold";
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "inline";
  }
  for(var k = 0; k < notOct.length; k++){
    notOct[k].style.display = "inline";
  }
  for(var k = 0; k < letterBtn.length; k++){
    letterBtn[k].style.display = "none";
  }
}

decOn();

decMode.onclick = function (){
  decOn();
  clearDisplay();
}

binMode.onclick = function(){
  inputMode = "bin";
  console.log("binMode: " + inputMode);
  baseBtnOff();
  this.style.fontWeight = "bold";
  clearDisplay();
  
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "none";
  }
}

octMode.onclick = function(){
  inputMode = "oct";
  console.log("octMode: " + inputMode);
  baseBtnOff();
  clearDisplay();
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "inline";
  }
  this.style.fontWeight = "bold";
  for(var k = 0; k < notOct.length; k++){
    notOct[k].style.display = "none";
  }
}

hexMode.onclick = function(){
  inputMode = "hex";
  console.log("hexMode: " + inputMode);
  baseBtnOff();
  clearDisplay();
  this.style.fontWeight = "bold";
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "inline";
  }
  for(var k = 0; k < notOct.length; k++){
    notOct[k].style.display = "inline";
  }
}

sciMode.onclick = function (){
  for (var k = 0; k < sciBtn.length; k++) {
    sciBtn[k].style.display = "inline";
  }
  for(k = 0; k < progInter.length; k++){
    progInter[k].style.display = "none";
  }
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "inline";
  }
  for(var k = 0; k < notOct.length; k++){
    notOct[k].style.display = "inline";
  }
  sciMode.classList.add("onBtn");
  baseMode.classList.remove("onBtn");
  progMode.classList.remove("onBtn");
  decPoint.style.display = "inline";
  clearDisplay();
  inputMode = "dec";

};

baseMode.onclick = function () {
  for (var k = 0; k < sciBtn.length; k++) {
    sciBtn[k].style.display = "none";
  }
  for(k = 0; k < progInter.length; k++){
    progInter[k].style.display = "none";
  }
  for(var k = 0; k < notBin.length; k++){
    notBin[k].style.display = "inline";
  }
  for(var k = 0; k < notOct.length; k++){
    notOct[k].style.display = "inline";
  }
  baseMode.classList.add("onBtn");
  sciMode.classList.remove("onBtn");
  progMode.classList.remove("onBtn");
  decPoint.style.display = "inline";
  clearDisplay();
  inputMode = "dec";
};

progMode.onclick = function(){
  for(var k = 0; k < progInter.length; k++){
    progInter[k].style.display = "block";
    sciBtn[k].style.display = "none";
  }
  for(k = 0; k < sciBtn.length; k++){
    sciBtn[k].style.display = "none";
  }

  decPoint.style.display = "none";
  sciMode.classList.remove("onBtn");
  baseMode.classList.remove("onBtn");
  progMode.classList.add("onBtn");
  clearDisplay();
  decOn();
}

// bitOpArray.forEach(function (button) {
//   button.onclick = function (event) {
//     operator = button.innerText;
//   }
// })



function baseBtnOff(){
  for(var k = 0; k < baseBtn.length; k++){
    baseBtn[k].style.fontWeight = ("lighter");
  }
}

//oparator functions:

function addNums(num1, num2) {
  return +num1 + +num2;
}
function subNums(num1, num2) {
  return +num1 - +num2;
}

function multiNums(num1, num2) {
  return (num1 - 0) * (num2 - 0);
}

function divideNums(num1, num2) {
  if (num2 == 0) {
    return "Error! NO DIVIDING IN 0";
  } else {
    return +num1 / +num2;
  }
}


var f = [];
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


/*
function factorial(num){

}


*/


//clear function temporary- applies after operatores and "=":
function clearInputs() {
  num1 = "";
  num2 = "";
  ans = "";
  operator = "";
  isNum1 = true;
  isDot = false;

}

function clearTempMemory() {
  memoryNum = "";
  memoryOperator = "";
  memoryAns = "";
}




clearBtn.onclick = function (){
  clearDisplay();
}

function clearDisplay() {
  clearInputs();
  // displayEl.innerText = "0";
  hexaDis.innerHTML = "0";
  octaDis.innerHTML = "0";
  binDis.innerHTML = "0";
  digit.innerHTML = "0";
  clearTempMemory();
}




// function clearAllDis(){
//   digit.innerText = "0";
// }




/*
function changeBase(num){
  button.onclick = function (event) {
    switch (){
       case hex:
    function...
    case oct:
    function...
    case hex:
    function...
    case bin:
    function...
    default:


    }
   function...


}
*/

//var inputMode = "dec" // dec   bin   oct   hex

function convertInput(num){
  console.log("convertInput. num: ", num);
  switch (inputMode) {
    case "dec":
      //no conversion needed;
      baseNum = 10;
      break;
    case "bin":
      //console.log("bin, num: " , num);
      num = Number.parseInt(num, 2);
      baseNum = 2;
      break;
    case "oct":
      num = Number.parseInt(num, 8);
      baseNum = 8;
      break;

    case "hex":
      num = Number.parseInt(num, 16);
      baseNum = 16;
      break;
    default:
      //console.log("num: " , num);
      break;
  }
  return num;
}



numButtonsArray.forEach(function (button) {
  button.onclick = function (event) {
    clearTempMemory();
    if (button.innerText === ".") {
      if (isDot === false) {
        if (isNum1) {
          num1 += ".";
          //displayEl.innerText = num1;
          digit.innerText = num1;
          hexaDis.innerText = Number.parseInt(num1).toString(16);
          octaDis.innerText = Number.parseInt(num1).toString(8);
          binDis.innerText = Number.parseInt(num1).toString(2);
        } else {
          num2 += button.innerText;
          //displayEl.innerText = num2;
          digit.innerText = num2;
          hexaDis.innerText = Number.parseInt(num2).toString(16);
          octaDis.innerText = Number.parseInt(num2).toString(8);
          binDis.innerText = Number.parseInt(num2).toString(2);
        }
        isDot = true;
      }
    } else {
      if (isNum1) {
        //num1 = num1.toString();
        num1 = num1.toString(baseNum);
        num1 += button.innerText;
        num1 = convertInput(num1);
        console.log("num1: " + num1);
        //displayEl.innerText = num1;
        digit.innerText = num1;
        //allDisplay[0].innerText = num1;
        //console.log("dec: " + displayEl.innerText);
        //var temp =  Number.parseInt(num1);
        hexaDis.innerText = Number.parseInt(num1).toString(16);
        //console.log("hexa: ");
        octaDis.innerText = Number.parseInt(num1).toString(8);
        //console.log("Octa: " + octaDis.innerText);
        binDis.innerText = Number.parseInt(num1).toString(2);
        console.log("binary: " + binDis.innerText);
        num1 = num1 - 0;
      } else {
        //num2 = num2.toString();
        num2 = num2.toString(baseNum);
        num2 += button.innerText;
        num2 = convertInput(num2);
        console.log("num2: " + num2);
        //displayEl.innerText = num2;
        digit.innerText = num2;
         //allDisplay[0].innerText = num2;
         hexaDis.innerText = Number.parseInt(num2).toString(16);
         //console.log("hexa: " + hexaDis.innerText);
         octaDis.innerText = Number.parseInt(num2).toString(8);
         //console.log("Octa: " + octaDis.innerText);
         binDis.innerText = Number.parseInt(num2).toString(2);
         console.log("binary: " + binDis.innerText);
        num2 = num2 - 0;
      }
    }
  };
});

opsButtonsArray.forEach(function (button) {
  memoryNum = "";
  memoryOperator = "";
  button.onclick = function () {
    if (num1 === "") {
      num1 = "0";
    }
    if (isNum1 === false && num2 !== "") {
      calculate();

      num1 = ans;
      num2 = "";
      ans = "";
    }
    operator = button.innerText;

    isNum1 = false;
    isDot = false;

    if (operator === "sin" || operator === "cos" || operator === "tan" || operator === "not") {
      calculate();
      num2 = num1;
    }
  };
});

equalButton.onclick = function () {
  if (num1 === "") {
    num1 = memoryAns;
    num2 = memoryNum;
    operator = memoryOperator;
  }
  if (num2 === "") {
    num2 = num1;
  }
  calculate();
  // clearInputs();
};

function calculate() {
  if (num1.toString().search(".") !== -1) {
    num1 = parseFloat(num1);
    num1 = num1.toFixed(10);
    num1 = +num1;
  }
  if (num2.toString().search(".") !== -1) {
    num2 = parseFloat(num2);
    num2 = num2.toFixed(10);
    num2 = +num2;

  }
  switch (operator) {
    case "+":
      ans = addNums(num1, num2);

      break;
    case "-":
      ans = subNums(num1, num2);
      break;
    case "×":
      ans = multiNums(num1, num2);
      break;
    case "÷":
      ans = divideNums(num1, num2);
      break;
    case "x^y":
      ans = Math.pow(num1, num2);
      break;
    case "sin":
      ans = Math.sin((num1 * Math.PI) / 180).toFixed(3);
      break;
    case "cos":
      ans = Math.cos((num1 * Math.PI) / 180).toFixed(3);
      break;
    case "tan":
      var co = Math.cos((num1 * Math.PI) / 180).toFixed(3);
      var si = Math.sin((num1 * Math.PI) / 180).toFixed(3);

      if (co != 0) {
        ans = (si / co).toFixed(3);
      } else {
        ans = "math error";
      }
      break;
    case "sqrt":
      ans = Math.sqrt(num1);
      break;
    case "ln":
      ans = Math.log(num1, 2.718);
      console.log("ans lan: " + ans);
      break;
    case "abs":
      ans = Math.abs(num1);
      break;
    case "n!":
      ans = factorial(num1);
      break;

    case "AND":
      console.log("and:  num1: " + num1 + " num2: " + num2);
      ans = (num1 & num2);
      console.log("and: " + ans);
      break;

    case "OR":
      console.log("or:  num1: " + num1 + " num2: " + num2);
      ans = (num1 | num2);
      console.log("or: " + ans);
      break;

    case "XOR":
      console.log("xor:  num1: " + num1 + " num2: " + num2);
      ans = (num1 ^ num2);
      console.log("XOR: " + ans);
      break;
    case "NOT":
      console.log("NOT:  num1: " + num1 + " num2: " + num2);
      ans = (~num1);
      console.log("NOT: " + ans);
      break;
  }

  if (isNaN(ans)) {
    displayEl.innerText = "error";
  } else {
    //displayEl.innerText = ans.toFixed(3);
    digit.innerText = ans;
    hexaDis.innerText = Number.parseInt(ans).toString(16);
    console.log("hexa: " + hexaDis.innerText);
    octaDis.innerText = Number.parseInt(ans).toString(8);
    console.log("Octa: " + octaDis.innerText);
    binDis.innerText = Number.parseInt(ans).toString(2);
    console.log("binary: " + binDis.innerText);
    memoryNum = num2;
    memoryOperator = operator;
    memoryAns = ans;
  }
}
