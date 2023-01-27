function solution(arr) {
  const smallestNum = Math.min(...arr); //arr중 가장 작은 수 
  const newArr = arr.filter(a => a !== smallestNum); //가장 작은수를 제외하고 배열
  
  if (newArr.length === 0){
      return [-1]; //만약 빈배열인 경우 -1리턴
  }
  return newArr;
}

/* Math.min 함수를 배열에 사용하기 위해서 spread operator(...)를 사용했다 */