function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }
  return true
}

/* 
  Add your pseudocode here

  loop through the string
  check if the last element != element at the beginning
  if the elements are not the same return false or else return true
  Increment at the start and decrement at the end
*/

/*
  Add written explanation of your solution here
  I have created a functionn that enables the user to input a word. I checked
  if the word value is less than 2 and I returned true if  the word has a length of less than 2.
  I then looped the string to create an outcome if the word is >= 2. 
  I then returned false when the last element doesn't match the first element.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
