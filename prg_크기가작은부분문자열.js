function solution(t, p) {
  const splitArr = [];
  let result = 0;

  for (i = 0; i < t.length; i++) {
    const splitNum = t.substring(i, i + p.length);

    if (splitNum.length == p.length) {
      splitArr.push(splitNum);
    }
  }

  for (k = 0; k < splitArr.length; k++) {
    if (splitArr[k] <= p) {
      result += 1;
    }
  }
  return result;
}

// 헷갈렸던부분! 3141592를 길이3으로 쪼갤떄 314/159/2 가 아니라 314/141/415/159/592 이렇게 간다는점. 그리고 잘랐을때 길이가 3인것만 추려야햠.
