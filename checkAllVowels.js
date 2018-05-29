function checkVocals(string) {
  var hurufVocals = ['a','i','u','e','o','A','I','U','E','O'];
  var newStr = '';

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < hurufVocals.length; j++) {
      if (string[i] === hurufVocals[j]) {
        newStr += string[i];
      }
    }
  }

  if (newStr.length === string.length) {
    return true;
  }else {
    return false;
  }
}
console.log(checkVocals('semprul'));
console.log(checkVocals('wuhu'));
console.log(checkVocals('asdrtgh'));
console.log(checkVocals('aiueo'));
console.log(checkVocals('aiIUEA'));
