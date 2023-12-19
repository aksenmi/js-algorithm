let memoryScore = 0;
const memoryScoreResult = [];

function solution(name, yearning, photo) {
  for (let i = 0; i < photo.length; i++) {
    for (let k = 0; k < photo[i].length; k++) {
      let position = name.indexOf(photo[i][k]);

      if (position !== -1) {
        memoryScore += yearning[position];
      }
    }
    memoryScoreResult.push(memoryScore);
    memoryScore = 0;
  }

  return memoryScoreResult;
}

//yearing[0]번째와 name[0]번째는 같다는 것을 이용했다.
