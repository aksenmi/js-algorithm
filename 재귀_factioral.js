// n 을 넣으면 factorial 을 구해주는 함수를 구현하시오 

function factorial(n){
  if(n === 1){
      return 1;
  }
  return n * factorial(n-1);
}