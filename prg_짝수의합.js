function solution(n) {
    let sum = 0;
    for(i = 1; i <= n; i++){
        if(i % 2 === 0){
            sum += i;
        }  
    }
    return sum;
}

/* 
i가0이 되길 바랐으면 =으로 할당해줬어야하는데 =, ==, === 차이점을 잘 몰랐음
== 값이 같은지 비교
=== strict equal operator. 값과 값의 종류(data type)가 모두 같은지 비교

함수의 결과값을 반환하는 return 써줘야지! 

짝수들을 합 할 변수도 만들어줘야지 .. 초기값은 0으로
*/
