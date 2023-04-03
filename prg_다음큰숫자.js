function solution(n) {
  for (let i = 1; i < 50; i++) {
    if (
      n.toString(2).match(/1/g).length ===
      (n + i).toString(2).match(/1/g).length
    ) {
      return n + i;
    }
  }
}
