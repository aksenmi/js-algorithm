function solution(num_list) {
    const even =num_list.filter(num=>(num%2===0));
    const odd =num_list.filter(num=>(num%2!==0));
    return [even.length, odd.length]
}



//변수없이 바로 리턴값에 들어가는 방법도 있다
function solution(num_list) {
    return [num_list.filter(num=>(num%2===0)).length, num_list.filter(num=>(num%2!==0)).length]
}

