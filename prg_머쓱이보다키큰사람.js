//반목문을 이용한 코드 
function solution(array, height) {
    let count = 0;
    for(i = 0; i <= array.length; i++){
        if(array[i] > height){
            count += 1;
        }
    }
    return count;
}

/* 처음에 return을 실수로 for문 안에 넣었더니 계속 값이 0이나와서 당황했다 체크체크!
밑 코드보다 반복문을 이용한 코드가 더 좋아보인다
다른 사람들은 filter를 많이 쓰네. 공부하자 */



//함수를 이용한 코드
function solution(array, height) {
    array.push(height); 
    array.sort((a, b) => b - a); 
    let result = array.indexOf(height);
    return result;
}

/* height값을 배열에 추가해주고,
그 배열을 내림차순 만들어준 후,
배열내에서 height의 위치를 뽑아냄 
*/