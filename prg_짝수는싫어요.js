function solution(n) {
    const arr = new Array();
    for(i=1; i<=n; i++){
       if(i%2 !==0){
        arr.push(i);
       }
    }
    return arr
    
    
}

/* const arr = new Array(); 는 const arr = []; 로도 쓸 수 있다 
배열인 이문제는 let보다 const가 더 안정적이다
예를 들어보면 const는 집주소고정이고 집요소인 사람들이 들어오고 나갈수 있음
허나 let은 집주소 자체가 바뀔 수 있으니 ..
*/