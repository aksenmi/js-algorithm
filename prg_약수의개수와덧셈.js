function solution(left, right) {
  const arr = [left];
  const result = [];
  let count = 0;

  for (i = 1; i <= right - left; i++) {
    arr.push(left + i);
  }

  for (k = 0; k < arr.length; k++) {
    for (j = 1; j <= arr[k]; j++) {
      if (arr[k] % j === 0) {
        count += 1;
      }
    }
    if (count % 2 !== 0) {
      result.push(-arr[k]);
    } else {
      result.push(arr[k]);
    }
    count = 0;
  }
  return result.reduce((a, b) => a + b);
}
