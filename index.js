// Code your solution here!
function printString(string){
  let substring;

  console.log(string[0]);
  if(string.length > 1){

  substring = string.substring(1, string.length);

  printString(substring);
  }else{
    return true
  }
}

function reverseString(string){
  let substring;
  if(string.length >1){
    lastLetter
    substring = string.substring(0,string.length - 1)
  }else{
    return true
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(string){
  if (string.length < 2){
    return true
  }
  else if(string[0] === string[string.length - 1]){
    return isPalindrome(string.substring(1, string.length - 1));
  } else{
    return false
  }
}

function addUpTo(myArray,idx){
  if(idx > 0 ){
    console.log(idx)
    return myArray[idx] + addUpTo(myArray, --idx)
  }else{
  console.log(myArray[idx])
    return myArray[idx]
  }
}

function maxOf(arr){
  let max = arr[0]
  if(arr.length < 2){
    return arr[0]
  }else{
    if(arr[arr.length - 1] > max){
       arr.shift()
      return maxOf(arr)
    }else{
      arr.pop()
      return maxOf(arr)
    }
  }
}

function includesNumber(arr,num){
  if(arr.length < 2){
    if(arr[0] == num){
      return true
    }
  } else{

  }

}

function includesNumber(arr,num){
  console.log(arr)
  if(arr.length === 1 || arr[0] === num){
    if(arr[0] === num){
      return true
    }else{
      return false
    }
  } else {
    arr.shift();
    return includesNumber(arr,num)
  }
}
