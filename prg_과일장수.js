function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a); //내림차순 정렬
  const box = Math.floor(sortScore.length / m); //판매할 수 있는 box수

  let revenue = 0;

  for (let i = 1; i <= box; i++) {
    revenue += sortScore[m * i - 1] * m;
  }
  return revenue;
}

// 예시)
// sortScore = [4,4,4,3,3,2,1,1] 여기서 m이 4개씩이고, 판매할 box가 2개가 된다면,
// sortScore[4 * 1 -1] === 3
// sortScore[4 * 2 -1] === 1
// (내림차순 정렬했으므로 마지막 값이 최저사과점수가 된다.)
