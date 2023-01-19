function solution(hp) {
    const a = Math.floor(hp/5);
    const b = Math.floor((hp-(a*5))/3);
    const c = hp-(a*5 + b*3);
    
    return a+b+c
}


// b부분을 Math.floor((hp%5)/3) c부분을 (hp%5)%3 이렇게 나머지로(%)나타내는 방법도 있음