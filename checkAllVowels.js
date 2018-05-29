
function vowel(str) {

  var vokal = 'aiueo'

  for (var i = 0 ; i < vokal.length ; i++) {
    for ( var j = 0 ; j < str.length ; j++){
      if (str[j] === vokal[i]) {
        return true
      }
    }
  }
  return false
}

console.log(vowel('aiueo'));
console.log(vowel('dghuuuuujkl'));
console.log(vowel('adi ada ada'));
console.log(vowel('brrrrrryyyttt'));
console.log(vowel('gggghllll'));
