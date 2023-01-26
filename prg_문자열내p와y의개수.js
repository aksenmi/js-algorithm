function solution(s){
  const a = s.toUpperCase();
  const matchedP = a.match(/P/g) ?? []; 
  const matchedY = a.match(/Y/g) ?? [];
  
  if (matchedP.length === 0 && matchedY.length === 0) {
      return true;
  } 
  
  if (matchedP.length === matchedY.length) {
      return true;
  } else {
      return false;
  }
}

/* match함수는 매치되는게 없으면 빈배열이 아닌 null로 리턴하기때문에 
값이 없을때도 빈배열로 나올 수 있게 만들어주기. 빈배열의 길이는 0

문제에서 p,y 모두 하나도 없는 경우엔 항상 true를 리턴하라고 되어있음. 문제 잘읽자 */