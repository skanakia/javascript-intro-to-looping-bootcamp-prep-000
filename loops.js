function forLoop(array) {
  for (let i = 0; i < 26; i++) {
    if(i===1) {
      var y = x + "I am 1 strange loop. "
      return y
    } else {
      y = y + "I am ${i} strange loops. "
      return y 
    }
  }
}