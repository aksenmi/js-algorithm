const LENGTH_31 = [1, 3, 5, 7, 8, 10, 12];
const LENGTH_30 = [4, 6, 9, 11];
const WEEK_FROM_FRI = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function getDateCount(month) {
  if (LENGTH_31.includes(month)) {
    return 31;
  } else if (LENGTH_30.includes(month)) {
    return 30;
  } else {
    return 29;
  }
}

function solution(a, b) {
  let dateCount = 0;

  for (i = 1; i < a; i++) {
    dateCount += getDateCount(i);
  }

  dateCount += b - 1; // 1월1일부터 1월 한달 31일이라고 치면 +31일에서 1일을뺀 -1을 해줘야한다.

  return WEEK_FROM_FRI[dateCount % 7];
}
