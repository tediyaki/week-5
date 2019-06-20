function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka < 10) {
        return angka
    }
    var lastDigit = angka % 10
    return kaliTerusRekursif(lastDigit * kaliTerusRekursif((angka - lastDigit) / 10))
}

  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6