const findSum = function(array) {
  sum = array.reduce((a, b) => {
    return a + b;
  });
  return sum;
};
const numbers = [2, 4, 6];
//console.log(findSum(numbers))

const findFrequency = function(array) {
  freqMap = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    let frequency = 0;
    for (let n = 0; n < array.length; n++) {
      const compValue = array[n];
      if (value === compValue) {
        frequency++;
      };
    };
    freqMap.push([frequency, value]);
  };
  freqMap.sort();
  const most = freqMap.slice(-1)[0];
  const least = freqMap.slice()[0];
  return `most: '${most.slice(-1)[0]}' least: '${least.slice(-1)[0]}'`
};
//console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));

const isPalindrome = (str) => {
  const lowerCaseStr = str.toLowerCase('');
  const splitStr = lowerCaseStr.split('');
  const reverseStr = splitStr.reverse();
  const backwardStr = reverseStr.join('');
  if (lowerCaseStr === backwardStr){
    return true;
  } else {
    return false;
  };
};
//console.log(isPalindrome('canal'));
//console.log(isPalindrome('Ana'));

const largestPair = function(array) {
  let organizedArray = [];
  for (let i = 0; i < array.length; i++) {
    const pairs = array[i] * array[i + 1];
    organizedArray.push(pairs);
  }
  organizedArray.sort();
  return organizedArray.slice(-2)[0];
};
//console.log(largestPair([5, 1, 2, 3, 1, 4]));
//console.log(largestPair([9, 5, 10, 2, 24, -1, -48]))

const removeParenth = function(str) {
  let array = str.split('');
  const newArray = [];
  const openParenth = array.indexOf('(');
  const closeParenth = array.indexOf(')') + 1;
  const endOfArray = array.length;
  const firstHalf = array.slice(0, openParenth);
  const secondHalf = array.slice(closeParenth, endOfArray);
  newArray.push(firstHalf.join(''));
  newArray.push(secondHalf.join(''));
  return newArray.join('');
};
//console.log(removeParenth('ido(not)liketocode'));

const scoreScrabble = function(str) {
  const array = str.split('');
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ||letter === 'l' || letter === 'n'|| letter === 'r' || letter === 's' || letter === 't') {
      score ++;
    };
    if (letter === 'd' || letter === 'g') {
      score += 2;
    };
    if (letter === 'b' || letter === 'c' || letter === 'm' || letter === 'p') {
      score += 3;
    };
    if (letter === 'f' || letter === 'h' || letter === 'v' || letter === 'w' || letter === 'y') {
      score += 4;
    };
    if (letter === 'k') {
      score += 5;
    };
    if (letter === 'j' || letter === 'x') {
      score += 8;
    };
    if (letter === 'q' || letter === 'z') {
      score += 10;
    };
  };
  return score;
};
//console.log(scoreScrabble('hello'))
//console.log(scoreScrabble('quiet'))
