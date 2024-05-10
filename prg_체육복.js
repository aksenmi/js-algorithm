function solution(n, lost, reserve) {
  //도난당했지만 여벌있는 친구는 제외
  const realLost = lost.filter((name) => !reserve.includes(name));
  const realReserve = reserve.filter((name) => !lost.includes(name));

  //오름차순 정렬
  realReserve.sort((a, b) => a - b);
  realLost.sort((a, b) => a - b);

  let student = n - realLost.length;

  for (let i = 0; i < realReserve.length; i++) {
    const index = realLost.findIndex(
      (num) => num === realReserve[i] + 1 || num === realReserve[i] - 1
    );

    if (index !== -1) {
      realLost.splice(index, 1);
      student += 1;
    }
  }
  return student;
}
