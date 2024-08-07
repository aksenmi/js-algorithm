function solution(s) {
  let firstChar = s[0];
  let firstCharCount = 0;
  let otherCahrCount = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (firstChar === s[i]) {
      firstCharCount++;
    } else {
      otherCahrCount++;
    }

    if (firstCharCount === otherCahrCount || s[i + 1] === undefined) {
      //하나 남을때도 고려
      result++;
      firstCharCount = 0;
      otherCahrCount = 0;
      firstChar = s[i + 1];
    }
  }
  return result;
}
