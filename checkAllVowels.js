function checkVowel(word){
  var vokal ="aiueoAIUEO"
  for(var i = 0; i < word.length ; i++){
    for(var j = 0; j < vokal.length ; j++){
      if(vokal[j] === word[i]){
        return true
      }
    }
  }
  return false
}


console.log(checkVowel("hayabusa"))
