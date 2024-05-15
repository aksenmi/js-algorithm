function solution(s, skip, index) {
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  let result = "";
  const splitSkip = skip.split("");
  const newAlphabet = alphabet.filter((a) => !splitSkip.includes(a));

  for (let i = 0; i < s.length; i++) {
    const selfIndex = newAlphabet.indexOf(s[i]);
    result += newAlphabet[(selfIndex + index) % newAlphabet.length]; //z다음 a를 계산할 수 있게
  }
  return result;
}

console.log(solution("aukks", "wbqd", 5));
