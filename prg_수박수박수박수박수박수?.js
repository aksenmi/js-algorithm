function solution(n) {
  const fullLetter = [];

  const EVEN_LETTER = "수"
  const ODD_LETTER = "박"
  
  for(i = 0; i < n; i++){
      if(i % 2 === 0){
          fullLetter.push(EVEN_LETTER);
      } else {
          fullLetter.push(ODD_LETTER);
      }
  } 
  
  return fullLetter.join("");
}

// 상수는 대문자로 써주기! 