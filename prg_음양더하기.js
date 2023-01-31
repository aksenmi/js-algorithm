function solution(absolutes, signs) {
  const arr = [];
  
  for(i = 0; i < signs.length; i++){
      if(signs[i] === true){
      arr.push(absolutes[i]);
      } else {
      arr.push(absolutes[i] * -1);
      }
  } 
  return arr.reduce((a,b) => a+b, 0);
}