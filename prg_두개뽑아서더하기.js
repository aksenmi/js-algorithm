function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]; //누적해서 더한 값을 변수에 담기

      if (!result.includes(sum)) {
        //중복된 값을 제외하기 위해 includes로 확인
        result.push(sum);
      }
    }
  }
  result = result.sort((a, b) => a - b); //정렬해서 다시 할당
  return result;
}
