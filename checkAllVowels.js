
function checkAllVowels(string) {
  const vowels = 'aeiou';

  for (let i = 0; i < string.length; i++) {
    let checker = false;
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        checker = true;
        break;
      }
    }
    if (!checker) {
      return false
    }
    // console.log(checker)
  }
  return true;

}

console.log(checkAllVowels('uoiauai')); // true
console.log(checkAllVowels('hacktiv8')); // false
