


function vowelCheck(str) {
    var vowels = 'aiueo'
    var vowelCounter = 0
    var string=''

    for (j = 0; j < str.length; j++) {
        if(str[j]!==' '){

            string+=str[j]
        }
    }

    for (i = 0; i < vowels.length; i++) {
        for (j = 0; j < string.length; j++) {
            if (vowels[i] === string[j]) {
                vowelCounter++
            }
            if (vowelCounter === string.length) {
                return true
            }
        }
    }
    return false

}
console.log(vowelCheck('ae ee ooo'))
console.log(vowelCheck('kriStya'))
console.log(vowelCheck('gogi92gagagagigo'))
console.log(vowelCheck('uaeo ua'))











