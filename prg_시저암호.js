function solution(s, n) {
  const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
  const DIVIDEND = 26;
  const EMPTY_STRING = " ";

  let result = "";

  for (i = 0; i < s.length; i++) {
    if (UPPER_CASE.includes(s[i])) {
      let idx = (UPPER_CASE.indexOf(s[i]) + n) % DIVIDEND;
      result += UPPER_CASE[idx];
    } else if (LOWER_CASE.includes(s[i])) {
      let idx = (LOWER_CASE.indexOf(s[i]) + n) % DIVIDEND;
      result += LOWER_CASE[idx];
    } else if (s[i] === EMPTY_STRING) {
      result += EMPTY_STRING;
    }
  }

  return result;
}

/* 4 나누기 26의 나머지가 4인걸 이해못했던 상황.. ㅎㅎ;;
변하지 않는 상수값은 대문자로 써주기.
split으로 안쪼개고 문자열 그대로 사용해주면 됐었음 */
