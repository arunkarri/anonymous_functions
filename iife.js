//print odd numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function odd(array) {
  return array.filter((ele) => {
    return ele % 2 !== 0;
  });
})(array);

let oddArray = function (array) {
  return array.filter((ele) => {
    return ele % 2 !== 0;
  });
};

console.log(oddArray(array));

//convert all strings to title caps

let words = ["arun", "joined", "the", "guvi", "course"];

(function capitals(array) {
  return array.map((ele) => {
    let first = ele.slice(0, 1);
    return first.toUpperCase() + ele.slice(1, ele.length);
  });
})(words);

let capitalise = function (array) {
  return array.map((ele) => {
    let first = ele.slice(0, 1);
    return first.toUpperCase() + ele.slice(1, ele.length);
  });
};

console.log(capitalise(words));

//sum of all numbers in an array
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

(function sum(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
})(array2);

let sum = function (array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};
console.log(sum(array2));

//return all primes in an array
(function primes(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let res = false;
    if (array[i] > 1) {
      for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
          res = true;
          break;
        }
      }
      if (res === false) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
})(array2);

let primeNumbers = function (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let res = false;
    if (array[i] > 1) {
      for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
          res = true;
          break;
        }
      }
      if (res === false) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
};
console.log(primeNumbers(array2));

//return all palindromes in an array
let array3 = [111, 120, 150, 121, 232, 454, 100, 900];

(function palindrome(array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
      .toString()
      .split("")
      .map((a) => +a);
    let res = true;
    for (let j = 0; j < num.length; j++) {
      if (num[j] !== num[num.length - j - 1]) {
        res = false;
        break;
      }
    }
    if (res === true) {
      final.push(parseInt(num.join("")));
    }
  }
  return final;
})(array3);

let palindromeArray = function (array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i]
      .toString()
      .split("")
      .map((a) => +a);
    let res = true;
    for (let j = 0; j < num.length; j++) {
      if (num[j] !== num[num.length - j - 1]) {
        res = false;
        break;
      }
    }
    if (res === true) {
      final.push(parseInt(num.join("")));
    }
  }
  return final;
};

console.log(palindromeArray(array3));

//median of two arrays

let sA1 = [1, 4, 6, 7, 10];
let sA2 = [10, 11, 15, 18, 20];

(function medianFn(a1, a2) {
  let final = a1.concat(a2).sort(function (a, b) {
    return a - b;
  });

  let middle = final.length / 2;
  let median = 0;
  if (middle % 1 === 0) {
    median = (final[middle] + final[middle + 1]) / 2;
  } else {
    median = final[Math.floor(middle)];
  }
  return median;
})(sA1, sA2);

let medianFn = function (a1, a2) {
  let final = a1.concat(a2).sort(function (a, b) {
    return a - b;
  });

  let middle = final.length / 2;
  let median = 0;
  if (middle % 1 === 0) {
    median = (final[middle] + final[middle + 1]) / 2;
  } else {
    median = final[Math.floor(middle)];
  }
  return median;
};
console.log(medianFn(sA1, sA2));

//remove duplicates from array
let array4 = [1, 1, 4, 5, 6, 6, 10];

(function uniqueArray(array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (final.indexOf(array[i]) === -1) {
      final.push(array[i]);
    }
  }
  return final;
})(array4);

let uniqueArray = function (array) {
  let final = [];
  for (let i = 0; i < array.length; i++) {
    if (final.indexOf(array[i]) === -1) {
      final.push(array[i]);
    }
  }
  return final;
};
console.log(uniqueArray(array4));

//rotate an array by k times and return the rotated array

let k = 5;
let array5 = [1, 4, 5, 6, 7];

(function rotatedArray(array, k) {
  if (k % array.length !== 0) {
    for (let i = 0; i < k; i++) {
      array.unshift(array.pop());
    }
  }
  return array;
})(array5, k);

let rotatedArray = function (array, k) {
  if (k !== array.length) {
    for (let i = 0; i < k; i++) {
      array.unshift(array.pop());
    }
  }
  return array;
};
console.log(rotatedArray(array5, k));
