// 프로그래머스 푸드 파이트 대회

function solution(food) {
  let result = "";
  let arr = food.map((x) => Math.floor(x / 2));

  for (let i = 1; i < food.length; i++) {
    result += i.toString().repeat(arr[i]);
  }
  return result + "0" + result.split("").reverse().join("");
}
