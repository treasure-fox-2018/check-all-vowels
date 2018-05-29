function isVowel(kata) {
    var huruf = 'aiueo'

    for (let i = 0; i < kata.length; i++) {
        var check = false
        for (let j = 0; j < huruf.length; j++) {
            if (kata[i] == huruf[j]) {
                check |= true
            }
        }
        check &= true
        if (!check) {
            return false
        }
    }
    return true
    
    
}
console.log(isVowel('test'));
console.log(isVowel('aoaaaaaaoui'));

