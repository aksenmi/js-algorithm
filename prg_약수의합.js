function solution(n) {
  const arr = [];
  
  for(i = 1; i <= n; i++){
   if(n % i === 0){
     arr.push(i);
   }
  }
  
  let sum = arr.reduce((a,b) => a+b, 0);
  return sum;
}

/* reduce의 초기값인 0을 안써줘서 런타임에러가 났다.
제한사항이 n은 0부터 3000이하 정수라고 써있는데 n이 0이라면 for문이 돌지않아서 빈배열이 된다.
reduce에 초기값을 명시해주지 않으면 가장 첫번째 배열요소를 꺼내쓰려고 하는데 
여기선 빈 배열이라 값을 찾지 못하여 null을 리턴하여 오류가 뜬다.

이렇게 코드 실행이 안될때는 제한사항을 값을 다시 한번 확인하자. */