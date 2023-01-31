// 소수 체크
function isPrime(n){
    if(n <= 1){
        return false;
    }

    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true;
}

// 시간 복잡도 : O(n)