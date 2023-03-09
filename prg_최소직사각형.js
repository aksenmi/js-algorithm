function solution(sizes) {
  let sumArray = [];
  sizes.forEach((el) => {
    sumArray = [...sumArray, ...el];
  });

  const maxNum = Math.max(...sumArray);

  const array = [];
  for (i = 0; i < sizes.length; i++) {
    array.push(Math.min.apply(null, sizes[i]));
  }

  const secondNum = Math.max(...array);

  return maxNum * secondNum;
}
