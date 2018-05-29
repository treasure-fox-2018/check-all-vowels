function checkAllVowels(string) {
  var vocals = 'aiueo'
  for (var i = 0; i < string.length; i++) {
    var status = false
    for (var j = 0; j < vocals.length; j++) {
      if (string[i]===vocals[j]||string[i]===vocals[j].toUpperCase()) {
        status = true;
      }
      // console.log(status);
    }
    if (status==false) {
      return status;
    }
  }
  return status;

}

console.log(checkAllVowels('aUiueOAiu'));
console.log(checkAllVowels('akUiueOAiu'));
