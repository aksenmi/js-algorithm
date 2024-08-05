function solution(n, m, section) {
  let result = 0;
  let currentEnd = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > currentEnd) {
      result++;
      currentEnd = section[i] + m - 1;
    }
  }

  return result;
}

console.log(solution(8, 4, [2, 3, 6]));
