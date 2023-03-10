function solution(s) {
  const numCheck = /^[0-9]+$/;

  if ((s.length === 4 || s.length === 6) && numCheck.test(s) === true) {
    return true;
  } else {
    return false;
  }
}

/* boolean값인 true를 "true"로 쓴 실수 체크, 
정규식 배워가기 */
