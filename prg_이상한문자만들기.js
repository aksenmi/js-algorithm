function solution(s) {
  const splitS = s.split(" ");
  const arr = [];

  for (i = 0; i < splitS.length; i++) {
    for (k = 0; k < splitS[i].length; k++) {
      if (k % 2 === 0) {
        arr.push(splitS[i][k].toUpperCase());
      } else {
        arr.push(splitS[i][k].toLowerCase());
      }
    }
    arr.push(" ");
  }
  return arr.join("").slice(0, -1);
}
