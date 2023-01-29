//수정 후 코드
function solution(n) {
  const convertedNum = n.toString()

  let sum = 0
  for (i = 0; i < convertedNum.length; i++) {
      sum += parseInt(convertedNum[i]);
  }
  
  return sum
}

/* 그냥 문자로 만들면 되는데 왜 문자를 굳이 배열로 집어넣으려고 했을까,, ?
그리고 length는 "123" 이면 3인데 왜 2라고 생각했는지 ... 황당.. */




// 수정 전 코드들
function solution(n) {
  const numbers = n.toString().split('').map(x => parseInt(x))
  return numbers.reduce((sum, elem) => sum + elem, 0);
}
/* reduce 초기값 0 넣어주기 */



function solution(n){
  let a = (n + "").split("")
  
  let count = 0;
  for(i = 0; i < splitArr.length; i++){
   count += parseInt(splitArr[i]);
  }
 return count;
}



function solution(n){
  let nums = []; 
  
  do{
     nums.push(n % 10);
     n = Math.floor(n / 10);
  } while (n > 0);
      
  let result = nums.reduce((a , b) => a + b);
  return result;
}