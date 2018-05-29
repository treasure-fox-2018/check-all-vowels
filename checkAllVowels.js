
function checkVowel(str) {
  var vowel = 'aiueoAIUEO'
  var count = 0
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < vowel.length; b++) {
      if (str[a] === vowel[b]) {
        count++
      }
    }
  }
  if (str.length === count) {
    return true
  } else {
    return false
  }
}

console.log(checkVowel('abcdefghijklmnopqrstuvwxyz'))
console.log(checkVowel('aiueo'))
console.log(checkVowel('aoIEoa'))