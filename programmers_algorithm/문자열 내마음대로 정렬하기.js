// 프로그래머스 문자열 내마음대로 정렬하기

function solution(strings, n) {
  let result = strings.sort((a, b) =>
    a.charCodeAt(n) === b.charCodeAt(n)
      ? a > b
        ? 1
        : -1
      : a.charCodeAt(n) - b.charCodeAt(n)
  );
  return result;
}
