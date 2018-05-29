


function vowelCheck(str) {
    var vowels = 'aiueo'
    var vowelCounter = 0


    for (i = 0; i < vowels.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (vowels[i] === str[j]) {
                vowelCounter++
            }
            if (vowelCounter === str.length) {
                return true
            }
        }
    }
    return false
 
}
console.log(vowelCheck('aeeeooo'))
console.log(vowelCheck('kriStya'))
console.log(vowelCheck('gogi92gagagagigo'))
console.log(vowelCheck('uaeoua'))











