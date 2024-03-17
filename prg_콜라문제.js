function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let remain = n - Math.floor(n / a) * a;
    let exchangedCoke = Number(Math.floor(n / a) * b);

    result += exchangedCoke;
    n = exchangedCoke + remain;
  }
  return result;
}
