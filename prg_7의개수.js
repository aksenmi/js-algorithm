function solution(array) {
  let result = 0;

  for (let item of array) {
    const splitItem = item.toString().split("");
    for (let num of splitItem) {
      if (Number(num) === 7) {
        result += 1;
      }
    }
  }
  return result;
}
