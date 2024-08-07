function solution(ingredient) {
  let result = 0;
  let i = 0;

  while (i <= ingredient.length - 4) {
    //남은길이가 최대4일때까지 반복
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      ingredient.splice(i, 4);
      result++;
      i = Math.max(0, i - 3); //4개가 최대므로 더 앞에까지 갈 필요가 없는것임 + 음수방지
    } else {
      i++;
    }
  }
  return result;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
