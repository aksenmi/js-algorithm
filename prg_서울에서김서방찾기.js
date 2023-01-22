function solution(seoul) {
    const x = seoul.indexOf("Kim");
    return `김서방은 ${x}에 있다`
}


//리턴값에 바로 넣어주는법
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}