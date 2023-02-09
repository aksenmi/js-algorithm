function solution(arr1, arr2) {
  const newArray = Array.from({length: arr1.length}, () => []);
 
  for(i = 0; i < arr1.length; i++){
      for(k = 0; k < arr1[0].length; k++){
          newArray[i].push(arr1[i][k] + arr2[i][k]);
      }
  }
  return newArray;
}

/* 배열만들어서 바로바로 넣기

레벨1단계부터 코드는 실행되지만 제출시 런타임에러가 자꾸발생..!
주어진 예시는 풀지만 제한사항을 고려 못해서 그런 경우가 많았다
엣지케이스 파악하기~! */