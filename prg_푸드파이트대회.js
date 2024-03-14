function solution(food) {
  let left = "";

  //0을 기준으로 left부터 구하기
  for (let i = 1; i < food.length; i++) {
    const addCount = Math.floor(food[i] / 2);
    //각 음식을 몇개먹는지를 구해서 left를 만든다
    left += String(i).repeat(addCount);
  }
  const right = left.split("").reverse().join("");

  return left + "0" + right;
}
