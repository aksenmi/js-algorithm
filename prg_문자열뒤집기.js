function solution(my_string, s, e) {
  if (s == e) return my_string; //바꿀 문자가 한 단어인 경우에는 밑에서 split이 되지 않는다. 이 부분을 놓쳐서 계속 통과에 실패했었다!

  const sliceString = my_string.slice(s, e + 1);
  const newString = sliceString.split("").reverse().join("");
  const splited = my_string.split(sliceString);

  return splited[0] + newString + splited[1];
}
