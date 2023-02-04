//해시맵을 이용

function solution(nums) {
  let map = new Map();
  
  for(i = 0; i < nums.length; i++){  
      if(map.get(nums[i]) === undefined){ 
          map.set(nums[i], true);
      }
  } 
  
  return Math.min(map.size, nums.length / 2);
  
}

/* 맵에 num[i]값이 undefined라면(값이 없으면 undefined함) map.set을 함 */
