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

function toggleRuler() {
  let
}

let fontSizeList = [100, 110, 120, 130, 140, 150, 160, 60, 70, 80, 90];
let fontSizeIndex = 1;
let x = 100;

let lineHeightList = [140, 160, 180, 200, 220, 240, 260, 280, 300];
let lineHeightIndex = 1;



function changeFontSize() {
  document.getElementById("check").style.fontSize = fontSizeList[fontSizeIndex] + '%';
  fontSizeIndex = (fontSizeIndex + 1) % fontSizeList.length;
}

function changeLineHeight() {
  document.getElementById("check").style.lineHeight = lineHeightList[lineHeightIndex] + '%';
  lineHeightIndex = (lineHeightIndex + 1) % lineHeightList.length;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
console.log(open);
console.log(modal_container);
console.log(close);

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});