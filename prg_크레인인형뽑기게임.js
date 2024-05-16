function solution(board, moves) {
  let arr = [];
  let removedItemCount = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let pickedItem = board[j][moves[i] - 1];
      if (pickedItem !== 0) {
        if (arr[arr.length - 1] !== pickedItem) {
          arr.push(pickedItem);
        } else {
          arr.pop(arr[arr.length - 1]);
          removedItemCount += 2;
        }
        board[j][moves[i] - 1] = 0; //pickedItem = 0; 변수를 통해 값을 변경하면 원본 배열의 값이 변경되지 않음

        break; //0이 아닌 값만 처리하고 나머지 실행x
      }
    }
  }
  return removedItemCount;
}
