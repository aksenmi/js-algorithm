function solution(brown, yellow) {
  const result = [];
  let index = 1;
  while (index <= Math.sqrt(yellow)) {
    if (yellow % index === 0) {
      result.push(index);
      if (yellow / index !== index) {
        result.push(yellow / index);
      }
    }
    index++;
  }
  result.sort((a, b) => a - b);
  //약수구하기

  const objectArr = [];
  if (result.length % 2 === 0) {
    for (let i = 0; i < result.length / 2; i++) {
      objectArr.push([result[result.length - (i + 1)], result[i]]);
    }
  } else {
    for (let i = 0; i < Math.ceil(result.length / 2); i++) {
      objectArr.push([result[result.length - (i + 1)], result[i]]);
    }
  }

  for (j = 0; j < objectArr.length; j++) {
    if (objectArr[j][0] * 2 + objectArr[j][1] * 2 + 4 === brown) {
      return [objectArr[j][0] + 2, objectArr[j][1] + 2];
    }
  }
}
