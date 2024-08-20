function reverseSentence(sentence) {
    if (sentence === "") return sentence;
    
    let spaceIndex = sentence.indexOf(" ");
  
    if (spaceIndex === -1) return sentence;
  
    let firstWord = sentence.substring(0, spaceIndex);
    let restSentence = sentence.substring(spaceIndex + 1);
  
    return reverseSentence(restSentence) + " " + firstWord;
  }
  
  let sentence = "i love my india";
  
  let ans = reverseSentence(sentence);
  console.log(ans); // Output: "india my love i"
  