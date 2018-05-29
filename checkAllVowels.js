function checkVowel(input) {
  let arrInput = []
  let vowel = ['a', 'i', 'u', 'e', 'o']

  for (let a = 0; a < input.length; a++) {
    if (input[a] !== ' ') {
      arrInput.push(input[a])
    }
  }

  for (let b = 0; b < arrInput.length; b++) {
    var isVowel = false
    for (let c = 0; c < vowel.length; c++) {
      if (arrInput[b] === vowel[c]) {
        isVowel = true
      }
    }
    if (!isVowel) {
      return false
    }
  }

  return true
  
}

console.log(checkVowel('ari supriatna'))//false
console.log(checkVowel('aaiiiuuee')) // true
console.log(checkVowel('ai uoei aiu')) // true
console.log(checkVowel('ae ao ai au')) // true
console.log(checkVowel('bu ai'))//false