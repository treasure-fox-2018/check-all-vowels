function checkAllVowels (str) {
  var vowel = ['a', 'i', 'u', 'e', 'o'];
  
  var hasil = [];
  for (var i = 0; i <= vowel.length - 1; i++) {
    var index = 0;
    for (var j = 0; j <= str.length - 1; j++) {
      if (vowel[i] === str[j]) {
        index = index + 1;
      }
    }
    hasil.push(index)
  }
  
  var jumlah = 0;
  for (var i = 0; i <= hasil.length - 1; i++) {
  jumlah = jumlah + hasil[i];
  }

  if (jumlah === str.length) {
    return true;
  }
  else {
    return false;
  }
}






console.log(checkAllVowels('aurora'));
console.log(checkAllVowels('auoa'));