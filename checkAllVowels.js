function checkAllVowels (input){
  let hurufVocal = "aiueo";
  let countVocal = 0;
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < hurufVocal.length; j++){
      if(input[i].toLowerCase() === hurufVocal[j]) {
        // return true
        countVocal++
      }
    }
  }
  if(countVocal !== 0){
    return true
  }else{
    return false
  }
  // return false;
}

console.log(checkAllVowels("Wahyudi"));
console.log(checkAllVowels("Brngkt"));
console.log(checkAllVowels("Iaaaa"));
console.log(checkAllVowels("Setiaji"));
