
function checkAllVowels(str){

    var library = 'aiueo';
    if(str.length === 0){
        return true;
    }

    for(let a=0; a<=library.length-1; a++){
        if(library[a]===str[0]){
            return checkAllVowels(str.slice(1))
        }
    }
    return false;

}

console.log(checkAllVowels('aaaueio'));
console.log(checkAllVowels('aataiee'));