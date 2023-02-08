function solution(arr, divisor) {
  const newNum = [];
  
  for(i = 0; i < arr.length; i++){
    if(arr[i] % divisor === 0){
      newNum.push(arr[i]);
    }
    if(newNum.length === 0){
        return [-1];
    }
      
  return newNum.sort((a, b) => a-b);
  }
}

/* divisor로 나누어 떨어지는 element가 단 하나도 없을때 -1 리턴하는 부분이 고민됐다.
근데 그냥 빈배열 길이가 0일때 -1로 반환하면된다. */

/*
Object -> 객체
{
  "name" : "박지민",
  "nickName" : "까불이",
  "age" : 4,
}
*/