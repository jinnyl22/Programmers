// 짝수의 합
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) answer += i;
  }
  return answer;
}

console.log(solution(4));
