function sum(n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
console.log(sum(5));


function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));


function fibnocci(n) {
  if (n <= 1) return n;
  return fibnocci(n - 1) + fibnocci(n - 2);
}
console.log(fibnocci(6));


function binarySearch(arr, t, left, right) {
  if (left > right) return -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (t === arr[middle]) return middle;
    if (t <= arr[middle]) {
      return binarySearch(arr, t, left, middle - 1);
    } else {
      return binarySearch(arr, t, middle + 1, right);
    }
  }
}
let arr = [3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 4, 0, arr.length - 1));


function deleteChar(char, t, i = 0) {
  if (char.length === i) return char;
  if (char[i] === t) {
    char = char.replace(t, "");
    return deleteChar(char, t, i);
  }
  return deleteChar(char, t, i + 1);
}
let string = "TricepTs";
console.log(deleteChar(string, "T"));


function reverseString(str){
    if(str == '') return ''
    return reverseString(str.slice(1)) + str[0]
}
let strig = 'CAnYouDoIt'
console.log(reverseString(strig));

function palindrome(str){
    if(str.length <= 1) return true
    if(str[0] !== str[str.length-1]) return false
    return palindrome(str.slice(1,str.length - 1))
}
let stri = 'madam'
console.log(palindrome(stri));


function vowels(str){
    let vow = 'aeiou'
    if(str.length === str[0]) return false
    
}
let strings = 'recursion' 
console.log(vowels(strings));
