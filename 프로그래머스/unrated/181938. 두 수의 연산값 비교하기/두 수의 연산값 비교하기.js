function solution(a, b) {
    const num1 = +(String(a) + String(b));
    const num2 = 2 * a * b;
   return num1 >= num2 ? num1 : num2;
    
}