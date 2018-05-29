function checkVowels(str){
	var vowels = ['a','i','u','e','o']
	var hurufStr = str.split('')

	for(var a = 0; a < hurufStr.length; a++){
    var index = vowels.indexOf(hurufStr[a])
    if(index === -1){
      return false;
    }
	}

	return true;
}

console.log(checkVowels('aaaaaaa'));
console.log(checkVowels('aaaaaab'));
console.log(checkVowels('aiueo'));
console.log(checkVowels('acabad'));