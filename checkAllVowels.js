
function checkAllVowels(string) {
  // debugger;
  var arrLowCaseVowels = ["a", "i", "u", "e", "o"];
  var arrUpCaseVowels = ["A", "I", "U", "E", "O"];

  var arrString = string.split("");

  if (arrString.length === 0) {
    return true;
  }

  for (var i = 0; i < arrLowCaseVowels.length; i++) {
    var inspectorLow = arrLowCaseVowels[i];
    if (arrString[0] === inspectorLow) {
      arrString.shift();
      var nextStringLow = arrString.join("");
      return checkAllVowels(nextStringLow);
    }
  }
  for (var j = 0; j < arrUpCaseVowels.length; j++) {
    var inspectorUp = arrUpCaseVowels[j];
    if (arrString[0] === inspectorUp) {
      arrString.shift();
      var nextStringUp = arrString.join("");
      return checkAllVowels(nextStringUp);
    }
  }
  return false;
}

//TEST CASES
console.log(checkAllVowels("wjdnw"));
console.log(checkAllVowels("UUioU"));
console.log(checkAllVowels("abcHhdA"));
