function vowelCheck(str){
  var vowel = 'aiueo';
  var check = true
  var str2 = str.toLowerCase();
  var str3 = '';

  for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < vowel.length; j++) {
      if (str2[i] === vowel[j]) {
        str3 += str2[i];
      }
    }
  }
  if (str.length === str3.length) {
    return true;
  }else {
    return false;
  }
}

console.log(vowelCheck('maram'));//false
console.log(vowelCheck('iou'));//true
console.log(vowelCheck('Aeu'));//true
console.log(vowelCheck('EUEU'));//true
