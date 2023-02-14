// 프로그래머스 소수 찾기

function prime(num) {
  
    if(num === 2) {
      return true;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false; 
      }
    }
    return true; 
  }
  
  
  function solution(n) {
      let count = 0
      for(let i=2;i<=n;i++){
          if(prime(i)){
              count++
          }
      }
      return count
  }