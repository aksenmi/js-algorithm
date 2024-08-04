function solution(nums) {
  //소수판별 함수
  const isPrime = (x) => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          result += 1;
        }
      }
    }
  }
  return result;
}
