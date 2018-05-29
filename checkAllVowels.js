/**
 * @function checkAllVowels
 * fungsi mengecek apakah input yang diterima terdiri dari huruf vokal seluruhnya atau tidak
 * @param {string} str input kata bebas dengan karakter selain huruf (a-z)
 * @returns {boolean} true apabila semua karakter dalam string adalah huruf vokal
 */

 function checkAllVowels(str) {
    let vowelCharacter = ['a', 'i', 'u', 'e', 'o'];

    for (let i = 0; i < str.length; i++) {
        let exist = false;

        for (let j = 0; j < vowelCharacter.length; j++) {
            if (str[i] === vowelCharacter[j]) {
                exist = true;
                j = vowelCharacter.length;
            }
        }

        if (exist === false) {
            return false;
        }
    }

    return true;
 }

console.log(checkAllVowels('aiueo')); // true
console.log(checkAllVowels('uueueuoeueieouaaaauuuu')); // true
console.log(checkAllVowels('aioeueooaaaah')); // false
