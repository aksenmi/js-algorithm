function solution(cards1, cards2, goal) {
  let pointer1 = 0;
  let pointer2 = 0;
  let findCount = 0;

  //cards의 인덱스 순서대로, goal에 같은 문자가 있는지 확인
  for (const target of goal) {
    if (cards1[pointer1] === target) {
      findCount += 1;
      pointer1 += 1;
      continue;
    }

    if (cards2[pointer2] === target) {
      findCount += 1;
      pointer2 += 1;
      continue;
    }
  }

  if (findCount === goal.length) {
    return "Yes";
  }

  return "No";
}
