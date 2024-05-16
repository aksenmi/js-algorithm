function solution(X, Y) {
  // 객체를 만들어서 빈도수 계산
  const countX = {};
  const countY = {};

  for (let num of X) {
    countX[num] = (countX[num] || 0) + 1; //해당 키가 없으면 0인데 거기다가 1을 더함, 있다면 거기에 1을 더함
  }
  for (let num of Y) {
    countY[num] = (countY[num] || 0) + 1;
  }

  let repeatNum = [];

  for (let num in countX) {
    if (countY[num]) {
      const commonCount = Math.min(countX[num], countY[num]); //공통숫자의 최소횟수
      for (let i = 0; i < commonCount; i++) {
        repeatNum.push(num); // num을 commonCount 횟수만큼 반복해서 추가
      }
    }
  }

  if (repeatNum.length === 0) {
    return "-1";
  }
  if (repeatNum.every((num) => num === "0")) {
    return "0";
  }

  repeatNum.sort((a, b) => b - a);
  return repeatNum.join("");
}

//indexOf와 splice로 풀었던 첫풀이...시간복잡도로 인해 시간초과... 주의하자
