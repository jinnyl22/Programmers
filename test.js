// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수
// 10이면 2,4,5,7 4개
function solution(n) {
  let primeNum = [];
  function sol(a) {
    if (a == 1) return primeNum;
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        break;
      } else if (a - 1 == i) {
        primeNum.push(a);
        sol(--a);
      }
    }
  }
  return sol(n);
}
console.log(solution(10));

// function soluti(n) {
//   var a = 1;
//   for (let i = 3x; i <= n; i++) {
//     for (let ii = 2; ii < i; ii++) {
//       if (i % ii == 0) break;
//       else if (i - 1 == ii) {
//         a++;
//       }
//     }
//   }
//   return a;
// }
