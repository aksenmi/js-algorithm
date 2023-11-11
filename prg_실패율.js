function solution(N, stages) {
  const asendingStages = stages.sort((a, b) => a - b);

  let a = new Map();

  for (i = 1; i < N + 1; i++) {
    const failureRate =
      asendingStages.filter((num) => num == i).length / stages.length;
    a.set(i, failureRate);
    asendingStages.splice(0, asendingStages.filter((num) => num == i).length);
  }
  const b = [...a]; //Map 객체를 정렬하기 위해 스프레드 연산자를 통해 배열로 변환.
  const sortB = b.sort((a, b) => b[1] - a[1]); // value값 기준으로 내림차순.

  return sortB.map((x) => x[0]); //key값 뽑아주기.
}
