function solution(array, commands) {
  let result = [];

  for (h = 0; h < commands.length; h++) {
    let i = commands[h][0];
    let j = commands[h][1];
    let k = commands[h][2];

    const arrSlice = array.slice([i - 1], [j]);
    arrSlice.sort((a, b) => a - b); //오름차순정렬

    result.push(arrSlice[k - 1]);
  }
  return result;
}
