// 프로그래머스 가장 가까운 같은 글자

function solution(s) {
    let stack = [];
    let result = [];
    
    for(let i = 0; i < s.length; i++){
        if(!stack.includes(s[i])){
            result.push(-1);
            stack.push(s[i]);
        }else{
            result.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
        }
    }
    
    return result;
}