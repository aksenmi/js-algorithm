//코드 수정 후 
function solution(n, k) {
    if(n >= 10){
        return n * 12000 + k * 2000 - parseInt(n/10) * 2000;
    }
    else{
        return n * 12000 + k * 2000;
    }
}



//수정 전
function solution(n, k) {
    let discountPrice = n * 12000 + k * 2000 - parseInt(n/10) * 2000
    let notdiscountPrice= n * 12000 + k * 2000

    if(n >= 10){
        return discountPrice;
    }
    else{
        return notdiscountPrice;
    }
}

/* 굳이 변수를 만들어서 더 복잡하게 만든것 같다..
글고 변수명 첫글자에 대문자 노노! */