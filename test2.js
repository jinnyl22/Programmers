// 양꼬치
function solution(n, k) {
  var a = n * 12000;
  var b = k * 2000;
  var c = Math.floor(n / 10) * 2000;
  return a + b - c;
}
console.log(solution(15, 2));
