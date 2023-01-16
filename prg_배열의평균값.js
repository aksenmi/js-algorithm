//수정 후 좋은코드
function solution(numbers) {
    let sum = 0;
    const numLength = numbers.length;
    
    for(i = 0; i < numLength; i++){
        sum += numbers[i];
    }
   
    return sum / numLength;
}

/*  num.length => numbers.length 알아보기 쉽게 변경
반복문안에 고정된 numbers.length가 계속 반복되므로 const로 numLength변수를 만들어서 대체
수정 전 코드는 굳이 반복문안에서 sum을 나눠줌 answer변수도 굳이. 비효율적코드 => return할때 마지막에 나눠주자
가독성 좋게 띄어쓰기 잘하자 i=0 => i = 0

*/



// 수정 전 코드
function solution(num) {
    let sum = 0;
    let answer =0;
    for(i=0; i<num.length; i++){
        sum += num[i];
    answer = sum/num.length;
    }
   
    return answer;
}

