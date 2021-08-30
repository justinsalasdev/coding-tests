var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x == 0 || x < 10) {
    return true;
  }

  let numArr = x.toString().split("");
  let length = numArr.length;
  let isEven = length % 2 == 0;
  let numSlice = isEven ? length / 2 : Math.ceil(length / 2);
  let firstHalf = numArr.slice(0, numSlice).join("");
  let secondHalf = numArr
    .slice(isEven ? numSlice : numSlice - 1)
    .reverse()
    .join("");

  return firstHalf === secondHalf;
};

isPalindrome(1001);

5;
