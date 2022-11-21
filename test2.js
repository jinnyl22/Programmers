// 피자 나눠먹기
function solution(slice, n) {
  return n % slice == 0 ? n / slice : parseInt(n / slice) + 1;
}

// console.log(solution(7, 10));
