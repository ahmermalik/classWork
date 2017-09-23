#
# fruit = "apple"
# for idex in range(5):
#         currentChar = fruit[idex]
#         print(currentChar)

# fruit = "apple"
# for idx in range(len(fruit) - 1, 1, -1):
#         print(fruit[idx])



# fruit = "dragons"
#
# position = 0
# while position < len(fruit):
#     print(fruit[position])
#     position = position + 1
#
#
# s = "python rocks"
# idx = 1
# while idx < len(s):
#     print(s[idx])
#     idx = idx + 2


def removeVowels(s):
    vowels = "aeiouAEIOU"
    sWithoutVowels = ""
    for eachChar in s:
        if eachChar not in vowels:
            sWithoutVowels = sWithoutVowels + eachChar
    return sWithoutVowels


print(removeVowels("compsci motha fuckaahhh this shit is great"))
print(removeVowels("aAbEefIijOopUus"))