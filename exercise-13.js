function sorting(arrNumber) {
    // code di sini
    for(var i = 1; i < arrNumber.length; i++) {
        var temp = arrNumber[i]
        for(var j = i-1; j >= 0 && arrNumber[j] < temp; j--) {
            arrNumber[j+1] = arrNumber[j]
        }
        arrNumber[j+1] = temp
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if(arrNumber.length < 1) {
        return ""
    }
    var count = 1;

    for(var i = 0; i < arrNumber.length-1 && arrNumber[i] === arrNumber[i+1]; i++) {
        count++
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''