function solution(participant, completion) {
  const participantMap = new Map();

  participant.forEach((name) => {
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) + 1);
    } else {
      participantMap.set(name, 1);
    }
  });
  completion.forEach((name) => {
    if (participantMap.get(name) === 1) {
      participantMap.delete(name);
    } else {
      participantMap.set(name, participantMap.get(name) - 1);
    }
  });

  return Array.from(participantMap.keys())[0];
}

//기존코드 시간복잡도 문제
// function solution(participant, completion) {
//   for (let i = 0; i < completion.length; i++) {
//     const index = participant.findIndex((name) => name === completion[i]);
//     if (index !== -1) {
//       participant.splice(index, 1);
//     }
//   }
//   return participant[0];
// }
