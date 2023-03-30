function solution(A, B) {
  const ascendingorderA = A.sort((a, b) => a - b); //오름차순
  const descendingorderB = B.sort((a, b) => b - a); //내림차순

  let count = 0;

  for (i = 0; i < A.length; i++) {
    count += ascendingorderA[i] * descendingorderB[i];
  }

  return count;
}
