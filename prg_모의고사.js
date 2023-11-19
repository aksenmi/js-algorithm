const PATTERN_FIRST = [1, 2, 3, 4, 5];
const PATTERN_SECOND = [2, 1, 2, 3, 2, 4, 2, 5];
const PATTERN_THIRD = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  let answerCountList = [];

  let answerCountFirst = 0;
  let answerCountSecond = 0;
  let answerCountThird = 0;

  for (let i = 0; i < answers.length; i++) {
    if (PATTERN_FIRST[i % PATTERN_FIRST.length] == answers[i]) {
      answerCountFirst += 1;
    }
  }
  answerCountList.push(answerCountFirst);

  for (let i = 0; i < answers.length; i++) {
    if (PATTERN_SECOND[i % PATTERN_SECOND.length] == answers[i]) {
      answerCountSecond += 1;
    }
  }
  answerCountList.push(answerCountSecond);

  for (let i = 0; i < answers.length; i++) {
    if (PATTERN_THIRD[i % PATTERN_THIRD.length] == answers[i]) {
      answerCountThird += 1;
    }
  }
  answerCountList.push(answerCountThird);

  let maxCount = Math.max(...answerCountList);

  let result = [];

  for (let i = 0; i < answerCountList.length; i++) {
    if (answerCountList[i] === maxCount) {
      result.push(i + 1);
    } //최대값이랑 같은값 찾기
  }

  return result;
}

// 더 좋은 방법으로 풀이!

const PATTERN_FIRST = [1, 2, 3, 4, 5];
const PATTERN_SECOND = [2, 1, 2, 3, 2, 4, 2, 5];
const PATTERN_THIRD = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function getAnswerCount(pattern, answers) {
  //for문 중복패턴 하나의 함수로 정리
  let count = 0;

  for (let i = 0; i < answers.length; i++) {
    if (pattern[i % pattern.length] == answers[i]) {
      count += 1;
    }
  }

  return count;
}

function solution(answers) {
  let answerCountList = [];

  answerCountList.push(getAnswerCount(PATTERN_FIRST, answers));

  answerCountList.push(getAnswerCount(PATTERN_SECOND, answers));

  answerCountList.push(getAnswerCount(PATTERN_THIRD, answers));

  let maxCount = Math.max(...answerCountList);

  let result = [];

  for (let i = 0; i < answerCountList.length; i++) {
    if (answerCountList[i] === maxCount) {
      result.push(i + 1);
    }
  }

  return result;
}
