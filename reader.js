function inputCheck() {
    var inputValue = document.getElementById( "largeInputForm" ).value;
    inputValue = ''+ inputValue.replace(/\n/g,"<br>") +'\n';
    document.getElementById( "check" ).innerHTML = inputValue;
  }