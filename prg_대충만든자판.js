function solution(keymap, targets) {
  let nums = [];
  let count = 0;
  let result = [];

  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      for (let k = 0; k < keymap.length; k++) {
        nums.push(keymap[k].indexOf(targets[i][j]));
      }
      if (nums.filter((num) => num !== -1).length === 0) {
        //어디에도 없는 경우
        count = -1;
        break;
      } else {
        nums = nums.filter((num) => num > -1);
        count += Math.min(...nums) + 1;
      }

      nums = [];
    }
    result.push(count);
    count = 0;
  }
  return result;
}

//더 효율적인 코드

function solution(keymap, targets) {
  const minKeyPresses = {};
  //ex) minKeyPresses['A'] = 1

  for (const row of keymap) {
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      console.log(char);
      if (minKeyPresses[char] === undefined || minKeyPresses[char] > i + 1) {
        // 포인트는 이 부분! minKeyPresses[char] > i + 1 , 기존께 현재보다 크다면 현재꺼로 업데이트
        minKeyPresses[char] = i + 1;
      }
    }
  }

  const result = [];

  for (const target of targets) {
    let count = 0;
    for (const char of target) {
      if (minKeyPresses[char] === undefined) {
        count = -1;
        break;
      }
      count += minKeyPresses[char];
    }
    result.push(count);
  }

  return result;
}
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
