function solution(arr){
  const result = [arr[0]];
  let idx = 0
  
  for(i = 1; i < arr.length; i++){
    if(arr[i] !== result[idx]){
      result.push(arr[i])
      idx += 1;
     }
  }
    
  return result;
}

/* 새로운 배열에 하나씩 숫자를 넣으면서 자기 자신보다 앞에 있는 숫자가 자기랑 같은지 아닌지를 보고 푸쉬하는법 */