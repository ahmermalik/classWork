# m1 = [
#     [1,3],
#     [2,4],
# ]
#
# m2 = [
# [5, 2],
# [1, 0],
# ]
#
# answer= []
# for i in range(0, len(m1)):
#     row = m1[i]
#     for j in range(0, len(row)):
#         print(i, j)
#         ans = m1[i][j] + m2[i][j]
#         answer.append(ans)
#
#
# print(answer)


m1 = [
    [1,3],
    [2,4],
]

m2 = [
    [5, 2],
    [1, 0],
]

answer= []
for i in range(0, len(m1)):
    row = m1[i]
    temp=[]
    for j in range(0, len(row)):
        print(i, j)
        ans = m1[i][j] + m2[i][j]
        temp.append(ans)

print(answer)