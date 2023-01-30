function solution(price, money, count) {
  let sum = 0;
  
  for(i = 1; i <= count; i++){
     sum = sum + (price * i);
  }
  
  if(money < sum){
     return sum - money;
  } else {
     return 0;
  }
}