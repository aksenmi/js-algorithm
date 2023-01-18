function solution(money) {
    let a = Math.floor(money / 5500);
    let b = money - a * 5500;
    return [a, b]
}

 //잔돈 b는 간단하게 money % 5500 하면 나오는구나. 변수없이 리턴값으로 바로 넣어줄걸 그랬다