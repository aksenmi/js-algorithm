function solution(lottos, win_nums) {
  const hashMap = new Map([
    [6, 1],
    [5, 2],
    [4, 3],
    [3, 4],
    [2, 5],
    [1, 6],
    [0, 6],
  ]);

  const zeroCount = lottos.filter((num) => num === 0).length;
  if (zeroCount === 6) {
    return [1, 6];
  }

  let corretNumCount = 0;
  const notZeroLottos = lottos.filter((num) => num !== 0);

  for (let i = 0; i < notZeroLottos.length; i++) {
    const index = win_nums.indexOf(notZeroLottos[i]);
    if (index !== -1) {
      corretNumCount += 1;
      win_nums.splice(index, 1);
    }
  }

  let count;
  if (zeroCount <= win_nums.length) {
    count = zeroCount;
  } else {
    count = win_nums.length;
  }
  const highestRanking = hashMap.get(corretNumCount + count);
  const lowestRanking = hashMap.get(corretNumCount);

  return [highestRanking, lowestRanking];
}
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

// 기존 맞은 개수 카운트하고 당첨번호배열에서 동일번호 삭제
// 0의 개수와 남은 당첨번호 개수들과 비교해서 최고,최저 등수 확정
// 총 맞힌 개수 -> 해시맵 이용해서 등수 찾기
