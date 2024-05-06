function solution(number, limit, power) {
  //약수 구하기
  let counts = [];

  while (number > 0) {
    let i = 1;
    let count = 0;

    while (i <= number / 2) {
      if (number % i === 0) {
        count += 1;
      }
      i++;
    }
    count += 1; //자기자신도 카운트
    counts.unshift(count);
    number--;

    if (count > limit) {
      counts[0] = power; //앞으로 집어넣으니까 0번째
    }
  }

  return counts.reduce((acc, cur) => acc + cur, 0);
}
console.log(solution(10, 3, 2));
