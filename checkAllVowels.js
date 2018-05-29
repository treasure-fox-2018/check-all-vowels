
function checkAllVowels(str){
    let library = 'aiueo'
    let checker = 0;
    for(let z = 0; z < str.length; z ++){
        if(library.indexOf(str[z].toLowerCase()) !== -1){
            checker++;
        }
    }
    return checker === str.length;
}

console.log(checkAllVowels('aaaueio'));
console.log(checkAllVowels('aataiee'));
console.log(checkAllVowels('richardson'))
console.log(checkAllVowels('vowels'));
console.log(checkAllVowels('AeiEO'))