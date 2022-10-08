// 약수 구하기
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) n % i == 0 ? answer.push(i) : null;
  return answer;
}
console.log(solution(10));
