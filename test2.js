// 피자 나눠 먹기
function solution(n) {
  let pizza = 0;
  n % 7 == 0 ? (pizza = n / 7) : (pizza = parseInt(n / 7) + 1);
  return pizza;
}

// console.log(solution(15));
