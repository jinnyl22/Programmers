def solution(players, callings):
    # 딕셔너리는 등수를 조작하기 위해서 존재
    pla_dic = {key: i for i, key in enumerate(players)}
    for player in callings:
        c = pla_dic[player] # 불린 선수의 등수
        pla_dic[player] -= 1 # 불렸으면 추월이니까 등수를 -1
        pla_dic[players[c-1]] += 1 # 앞사람의 등수를 +1
        # 바뀐 등수를 가지고 인덱스로 접근해서 swap을 해준다
        players[c-1], players[c] = players[c], players[c-1]

    return players