function solution(numbers) {
  let sum = 0;
  let numbersTotal = 0;
  
  for(k=0; k<=9; k++){
      sum += k;
  }
  
  for(i=0; i<numbers.length; i++){
      numbersTotal += numbers[i]
  }
  return sum - numbersTotal;
}

/* 0부터9까지의 값중에 현재 배열에 없는 값을 구하기 위해
0부터9까지의 합 - 현재 배열에 있는 수들의 합을 해줬다 */