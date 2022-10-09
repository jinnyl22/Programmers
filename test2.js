// 짝수 홀수 개수
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return
function solution(num_list) {
  var answer = [0, 0];
  num_list.map((i) => {
    i % 2 == 0 ? answer[0]++ : answer[1]++;
  });
  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 조건식 ? 참일때:아닐때
// 홀수인지 아니면 짝수인지
// 조건식 == 홀수 ? 홀수일때 실행 : 짝수일때 실행
// console.log(answer[0]); // 0
// answer[0]++;
// console.log(answer[0]); // 1

// console.log(answer[1]); // 0
// answer[1]++;
// console.log(answer[1]); // 1

// answer.map((e) => {
//  0번째 ~ 끝까지 도는거자나
//   매개변수 e는 answer[0] ~ answer[1] ~ answer[마지막]
// });

// for (let i = 0 ; i <= answer.length;i++){
// answer[i] == e
// }
// var answer1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// answer1.map((e) => {
//   console.log(e);
// });

var arr = ["hi"];
var arr1 = [0];
arr[0]++;
console.log(arr[0]);
