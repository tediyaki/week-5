function changeVocals (str) {
    //code di sini
    var notVocal = ""
    var vocal = /[aiueo]/i

    for(var i = 0; i < str.length; i++) {
        if(vocal.test(str[i])) {
            notVocal += String.fromCharCode(str[i].charCodeAt(0) + 1)
        } else {
            notVocal += str[i]
        }
    }
    return notVocal
  }
  
  function reverseWord (str) {
    //code di sini
    var rev = ""
    for(var i = str.length-1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var lowUp = ""

    for(var i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLowerCase()) {
            lowUp += str[i].toUpperCase()
        } else {
            lowUp += str[i].toLowerCase()
        }
    }
    return lowUp
  }
  
  function removeSpaces (str) {
    //code di sini
    var noSpace = ""

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            noSpace += str[i]
        }
    }
    return noSpace
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'