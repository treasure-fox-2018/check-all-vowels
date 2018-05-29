
function checkVowel(str) {
    const vocal = 'aiueo'
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vocal.length; j++) {
            if (str[i].toLowerCase() === vocal[j]) {
                //temp += vocal[i]
                return true
            }
        }
    }
    return false
}

console.log(checkVowel('aaaaaa'))
console.log(checkVowel('andre'))
console.log(checkVowel('OOOEO'))
console.log(checkVowel('GGGGG'))