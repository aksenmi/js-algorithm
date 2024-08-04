function solution(k, score) {
  let result = [];

  for (let i = 0; i < score.length; i++) {
    const sliceArr = score.slice(0, i + 1);
    if (i < k) {
      result.push(Math.min(...sliceArr));
    } else {
      result.push(sliceArr.sort((a, b) => b - a)[k - 1]);
    }
  }
  return result;
}

//k번째 미만까지는 그 중 가장 작은수를 뽑고,
//k번째 이상부터는 큰수부터 정렬하여 [k-1]번째를 뽑기
