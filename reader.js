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

let currFontWeight = "normal"
let fontWeightList = ["normal", "bold"];
let fontWeightIndex = 1;

function changeFontWeight() {
fontElem = document.getElementById("check")
fontElem.classList.remove(currFontWeight);
currFontWeight = fontWeightList[fontWeightIndex];
fontElem.classList.add(currFontWeight);
fontWeightIndex = (fontWeightIndex + 1) % fontWeightList.length;
}

let fontList = ["poppins", "roboto", "open-sans", "noto-sans-japanese", "lato", "eb-garamond"];
let currFont = "poppins";
let fontIndex = 1;

function changeFont() {
fontElem = document.getElementById("check");
fontElem.classList.remove(currFont);
currFont = fontList[fontIndex];
fontElem.classList.add(currFont);
fontIndex = (fontIndex + 1) % fontList.length;
}


function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}

const open = document.getElementById("open");
const close = document.getElementById("close");



let rulerHeightList = ["vh40", "vh42andHalf", "vh45", "vh47andHalf", "vh48andHalf", null];
let rulerHeightIndex = 0;
let currRulerHeight = "vhInit";
let isFirst = true;

open.addEventListener("click", () => {
const modal_container_top = document.getElementById("modal_container_top");
const modal_container_bottom = document.getElementById("modal_container_bottom");
if (isFirst) {
  isFirst = false;
} else {
  modal_container_top.classList.remove(currRulerHeight);
  modal_container_bottom.classList.remove(currRulerHeight);
}
currRulerHeight = rulerHeightList[rulerHeightIndex];
modal_container_top.classList.add(currRulerHeight);
modal_container_bottom.classList.add(currRulerHeight);
console.log(currRulerHeight);
if (currRulerHeight == null) {

  modal_container_top.classList.remove("show");
  modal_container_bottom.classList.remove("show");
} else {
  modal_container_top.classList.add("show");
  modal_container_bottom.classList.add("show");
}
rulerHeightIndex = (rulerHeightIndex + 1) % rulerHeightList.length;
});


// mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }