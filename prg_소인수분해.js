function solution(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      if (!answer.includes(i)) {
        answer.push(i);
      }
      n /= i--;
    }
  }
  return answer;
}
