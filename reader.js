function inputCheck() {
    var inputValue = document.getElementById( "largeInputForm" ).value;
    inputValue = ''+ inputValue.replace(/\n/g,"<br>") +'\n';
    document.getElementById( "check" ).innerHTML = inputValue;
  }

let widthIndex = 1;
let currWidthClass = "w100";
let widthList = ["w100", "w90", "w80", "w70", "w60", "w50", "w40", "w30"];

function changeWidth() {
  let elem = document.getElementById("outputBox");
  elem.classList.remove(currWidthClass);
  currWidthClass = widthList[widthIndex]
  elem.classList.add(currWidthClass);
  widthIndex = (widthIndex + 1) % widthList.length;
}

let fontSizeList = [100, 110, 120, 130, 140, 150, 160, 60, 70, 80, 90];
let fontSizeIndex = 1;
let x = 100;

function changeFontSize() {
  document.getElementById("check").style.fontSize = fontSizeList[fontSizeIndex] + '%';
  fontSizeIndex = (fontSizeIndex + 1) % fontSizeList.length;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}