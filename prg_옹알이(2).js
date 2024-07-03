function solution(babbling) {
  const baby = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let currentWord = babbling[i];
    let isInvalid = false;

    for (let j = 0; j < baby.length; j++) {
      if (currentWord.includes(baby[j] + baby[j])) {
        isInvalid = true;
        break;
      }

      while (currentWord.includes(baby[j])) {
        currentWord = currentWord.split(baby[j]).join(" ");
      }
    }

    currentWord = currentWord.replace(/\s+/g, "").trim(); // 공백 제거

    if (!isInvalid && currentWord === "") {
      //단어중복이 아니면서 다 소거되었을때
      count += 1;
    }
  }

  return count;
}
