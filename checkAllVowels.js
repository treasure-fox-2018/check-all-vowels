
function checkAllVowels(string) {
  // debugger;
  var arrLowCaseVowels = ["a", "i", "u", "e", "o"];
  // var arrUpCaseVowels = ["A", "I", "U", "E", "O"];

  var arrString = string.split("");

  if (arrString.length === 0) {
    return true;
  }

  for (var i = 0; i < arrLowCaseVowels.length; i++) {
    var inspector = arrLowCaseVowels[i];
    var comparison = arrString[0];
    var inspectorUp = arrLowCaseVowels[i].toUpperCase();
    if (comparison === inspector) {
      arrString.shift();
      var nextStringLow = arrString.join("");
      return checkAllVowels(nextStringLow);
    } else if (comparison === inspectorUp) {
      arrString.shift();
      var nextStringUp = arrString.join("");
      return checkAllVowels(nextStringUp);
    }
  }
  // for (var j = 0; j < arrUpCaseVowels.length; j++) {
  //   var inspectorUp = arrUpCaseVowels[j];
  //   if (arrString[0] === inspectorUp) {
  //     arrString.shift();
  //     var nextStringUp = arrString.join("");
  //     return checkAllVowels(nextStringUp);
  //   }
  // }
  return false;
}

//TEST CASES
console.log(checkAllVowels("wjdnw"));
console.log(checkAllVowels("UUioU"));
console.log(checkAllVowels("abcHhdA"));
