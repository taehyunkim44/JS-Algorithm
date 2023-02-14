// 프로그래머스 최소직사각형

function solution(sizes) {
  let result = 0;

  sizes.forEach((x) => {
    x.sort((a, b) => b - a);
  });

  const width = sizes.map((x) => x[0]);
  const length = sizes.map((x) => x[1]);
  result = Math.max(...width) * Math.max(...length);
  return result;
}
