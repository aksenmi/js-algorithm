function solution(s) {
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  for (i = 0; i < Object.values(obj).length; i++) {
    if (s.includes(Object.values(obj)[i]) == true) {
      s = s.replaceAll(Object.values(obj)[i], Object.keys(obj)[i]);
    } else {
      s = s;
    }
  }
  return Number(s);
}

/* 멍청이 짓 두가지
replaceAll함수안에 "" 넣어버려 문자로 인식하게 만든 실수, 
리턴값 "123" -> 123 이 되게 하려면 그냥 숫자로 바꿔주면되는데 replace로 바꾸려고 한 실수 */
