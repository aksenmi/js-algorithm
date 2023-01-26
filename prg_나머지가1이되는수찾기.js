function solution(n) {
  for(x = 1; x < n; x++){
      if(n % x === 1){
          return x;
      }
  }
}

/* while문으로도 해보기. */