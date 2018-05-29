
function checkVowels(str) {
  var string = str.toLowerCase();
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' ||
        string[i] === 'o' || string[i] === 'u') {
      count++;
    }
  }

  //console.log(`count: ${count}, length: ${str.length}`);
  if (count === str.length) return true;
  return false;
}
console.log(checkVowels('ABCDE'));
console.log(checkVowels('aEIuOOaai'));
console.log(checkVowels('aiuoe'));
console.log(checkVowels('hacktiv8'));