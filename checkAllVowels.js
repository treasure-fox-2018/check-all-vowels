function checkVokal(kata) {

  let vokal = 'aiueo';

  for (let i = 0; i < kata.length; i++) {
    let cek = false
    for (let j = 0; j < vokal.length; j++) {
      if (kata[i].toLowerCase() === vokal[j]) {
        cek = true
      }
    }


    if (!cek) {
      return false
    }
  }



  return true
}

console.log(checkVokal('aiuIaUui'));
console.log(checkVokal('auiuhja'));
console.log(checkVokal('aiuoauuiaiaouuaau'));
