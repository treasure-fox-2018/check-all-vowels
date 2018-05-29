function checkVocal(str) {
  let listVocal = ['a','i','u','e','o','A','I','U','E','O']
  let isVocal = false;
  for (var i = 0; i < str.length; i++) {
    let countVocal=0;
    for (var j = 0; j < listVocal.length; j++) {
      if (str[i] === listVocal[j]) {
        countVocal++;
      }
    }
    if (countVocal === 0 ) {
      return false; //use return here if no vocal found on current index string, safe looping time
    } else isVocal = true;
  }
  return isVocal;
}


console.log(checkVocal("aiueo"))
console.log(checkVocal("aiBeo"))
console.log(checkVocal("OEUASIISO"))
console.log(checkVocal("OEUAioo"))
console.log(checkVocal(""))
