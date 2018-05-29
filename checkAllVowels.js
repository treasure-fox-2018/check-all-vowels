function checkAllVowels(word){
    var count=0
    for(let i=0; i<word.length; i++){
        if(word[i] === "A" || word[i] === "a"){
            count+=1
        }
        else if(word[i] === "I" || word[i] === "i"){
            count+=1
        }
        else if(word[i] === "U" || word[i] === "u"){
            count+=1
        }
        else if(word[i] === "E" || word[i] === "e"){
            count+=1
        }
        else if(word[i] === "O" || word[i] === "o"){
            count+=1
        }
    }
    if(count === word.length){
        return true
    }
    return false
}

console.log(checkAllVowels("aiueo"))
console.log(checkAllVowels("iau"))
console.log(checkAllVowels("apa"))
console.log(checkAllVowels("kakak"))