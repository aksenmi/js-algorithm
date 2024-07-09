function solution(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const exceptMe = Array.from(s.slice(0, i));

    if (exceptMe.includes(s[i])) {
      const idx = exceptMe.lastIndexOf(s[i]);
      const aheadOfme = i - idx;
      result.push(aheadOfme);
    } else {
      result.push(-1);
    }
  }
  return result;
}
