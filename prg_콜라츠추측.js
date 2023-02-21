function solution(num) {
    const array = [num];
   
    if(num === 1){
       return 0;
    }
    
    while(num !== 2){
        if(num % 2 === 0){
            num = num / 2;
        }
        else{
            num = num * 3 + 1;
        }
        array.push(num);
   
    }
    if(array.length > 500){
       return -1;
    }
    
    return array.length;
}