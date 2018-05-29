function checkAllVowels (str) {
  var vocal = 'aiueoAIUEO'
  var containIdx = []
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < vocal.length; b++) {
      if (str[a] === vocal[b]) {
        containIdx.push(b)
      }
    }
  }
  if (containIdx.length === str.length) {
    return true
  } else {
    return false
  }
}

console.log(checkAllVowels('oiauoai'))
console.log(checkAllVowels('oialoai'))