function solution(x) {
  const a = String(x).split(""); //["1" , "3"]
  const b = a.map((i) => Number(i)); //[1, 3]
  const c = b.reduce((a , b) => a + b , 0); // 4
  
  if( x % c === 0){
      return true;
  } 
  else{
      return false;
  }
}