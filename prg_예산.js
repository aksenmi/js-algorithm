function solution(d, budget) {
  const sortedPrices = d.sort((a, b) => a - b);
  let count = 0;
  let remainedBudget = budget;

  for (i = 0; i < sortedPrices.length; i++) {
    remainedBudget -= sortedPrices[i];

    if (remainedBudget < 0) {
      break;
    }

    count += 1;
  }

  return count;
}

/* 끝맺음 중요 break
원래했던 const remainedBudget = budget - sortedPrices[i]; 를 for문 밖으로 let remainedBudget = budget; 빼줌 */
