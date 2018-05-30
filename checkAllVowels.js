function checkAllVowels(word){
    var vowels = "aiueo"
    var count=0
    for(let i=0; i<word.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(word[i].toLowerCase() === vowels[j]){
                count +=1
            }
        }
    }
    if(count === word.length){
        return true
    }
    return false
}

console.log(checkAllVowels("aiUeo"))
console.log(checkAllVowels("iau"))
console.log(checkAllVowels("apa"))
console.log(checkAllVowels("kakak"))