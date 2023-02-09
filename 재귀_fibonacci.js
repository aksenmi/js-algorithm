//피보나치 n번까지 나타내기 

function fibonacci(n){

  if(n === 2 || n === 1){
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}