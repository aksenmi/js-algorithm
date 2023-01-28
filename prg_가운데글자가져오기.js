function solution(s) {
  if(s.length & 2 !== 0){ 
      return s[Math.floor(s.length / 2)]; 
  }
  else{ 
      return s.slice(s.length / 2 - 1, s.length /2);
  } 
}

/* 처음에 substr 함수를 이용해서 문자를 잘랐는데 코드실행은 되지만 에러가 발생해서 띠용?
찾아봤더니 deprecated 라는 .. 이래서 공식문서를 읽으라고 하는구나
substr 대신 slice나 substring을 사용할 수 있었다 */


