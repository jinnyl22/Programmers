def solution(x, n):
    answer = []
    for i in range(n):
        if i == 0:
            answer.append(x)
        else:
            answer.append(x+answer[i-1] )
    return answer