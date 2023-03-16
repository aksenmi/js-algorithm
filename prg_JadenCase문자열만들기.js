function solution(s) {
  const splitS = [...s];
  let arrS = [];

  if (isNaN(splitS[0]) == true) {
    arrS.push(splitS[0].toUpperCase());
  } else if (isNaN(splitS[0]) == false) {
    arrS.push(splitS[0]);
  } else {
    arrS.push(" ");
  }

  for (i = 1; i < splitS.length; i++) {
    if (splitS[i - 1] === " ") {
      arrS.push(splitS[i].toUpperCase());
    } else if (splitS[i] === " ") {
      arrS.push(" ");
    } else {
      arrS.push(splitS[i].toLowerCase());
    }
  }
  return arrS.join("");
}
