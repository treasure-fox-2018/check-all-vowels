function checkVowels(str) {
    var vowels = 'aeiou';

    for (var i = 0; i < str.length; i++) {
        var isVowels = false;
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                isVowels = true;
            }
        }
        if (!isVowels) {
            return false;
        }
    }
    return true;
}

console.log(checkVowels('aeiou'));
console.log(checkVowels('aaiioouu'));
console.log(checkVowels('abcde'));
console.log(checkVowels('zyx'));
console.log(checkVowels('abcdefghimnotuv'));
