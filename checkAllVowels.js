// checkAllVowels

function checkAllVowels(input) {

    var vowel='aiueo'
    var str=input.toLowerCase()
    var counter=0

    for(var x=0; x<str.length; x++) {
        for(var y=0; y<vowel.length; y++) {
            if(str[x]===vowel[y]) {
                counter += 1
            }
        }
    }

    if(counter===str.length) {
        return true
    } else {
        return false
    }
}

console.log(checkAllVowels('abcde')) //FALSE
console.log(checkAllVowels('AiUOe')) //TRUE
console.log(checkAllVowels('AEObfg')) //FALSE
console.log(checkAllVowels('aeiO')) //TRUE


