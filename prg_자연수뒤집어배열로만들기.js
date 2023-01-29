function solution(n) {
  let nums = [];

  do{
     nums.push(n % 10);
     n = Math.floor(n / 10);
  } while (n > 0);

  return nums;
}

//다른 방법으로 생각해보기