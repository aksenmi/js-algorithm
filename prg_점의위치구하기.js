//반복문으로 쓴 코드
function solution(dot) {
    if (dot[0] > 0  && dot[1] > 0 ){
        return 1
    }
    else if (dot[0] < 0 && dot[1] > 0){
        return 2
    }
    else if (dot[0] < 0 && dot[1] < 0){
        return 3
    }
    else if (dot[0] > 0 && dot[1] < 0){
        return 4
    }
 }


 //삼항 연산자 중첩. 가독성이 별로인듯
function solution(dot) {
    const [a , b] = dot;
    const c = a * b > 0;
    return a > 0 ? (c ? 1 : 4) : (c ? 3 : 2)
}