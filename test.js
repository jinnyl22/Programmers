// 나머지가 1이 되게하는 수 중에 가장 작은 수
// x로 나눔
function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x == 1) return x;
  }
}
console.log(solution(11));
