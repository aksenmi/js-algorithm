function solution(n, m) {
  let bigNum = Math.max(n,m);
  let smallNum = Math.min(n,m);
 
  while(bigNum % smallNum !== 0){
      r = bigNum % smallNum;
      bigNum = smallNum;
      smallNum = r;
  }
  const gcd = smallNum; //최대공약수
 
  const lcm = (n * m) / smallNum // 최소공배수
 
  return [gcd, lcm]
}

/* 유클리드호제법을 이용한 최대공약수 구하기 */
