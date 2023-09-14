function solution(s) {
  var count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }

  return count == 0; //count가 0이면 true를 리턴
}

/* count < 0 일 경우 고려 
ex) "())...." => 1+(-1)+(-1).... 이렇게 중간에 -1일 경우에도 false가됨. 
처음에 이 부분을 놓치고 맨 앞자리가 ")"일때와 다 더했을때 0이 아닌경우만 false로 생각했다가 런타임 에러로 실패했었다. 
경우의 수를 꼼꼼하게 생각해보자. */
