// 세균 증식
// 1시간에 두배만큼 증식
function solution(n, t) {
  for (let i = 1; i <= t; i++) {
    n = n * 2;
  }
  return n;
}
