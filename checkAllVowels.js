function cekVocals(str){
    var vocals = ['a','i','u','e','o','A','I','U','E','O']
    var vocalString = []
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < vocals.length; j++){
            if(str[i] === vocals[j]){
                vocalString.push(str[i])
            }
        }
    }

    if(vocalString.length === str.length){
        return true
    }else{
        return false
    }
}

console.log(cekVocals('aaaa'))
console.log(cekVocals('aouhb'));

