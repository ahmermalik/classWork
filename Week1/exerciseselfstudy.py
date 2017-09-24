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


# def removeVowels(s):
#     vowels = "aeiouAEIOU"
#     sWithoutVowels = ""
#     for eachChar in s:
#         if eachChar not in vowels:
#             sWithoutVowels = sWithoutVowels + eachChar
#     return sWithoutVowels
#
#
# print(removeVowels("This sentences has a few vowels, but not all"))
# print(removeVowels("aAbEefIijOopUus"))
#



# s = "ball"
# r = ""
# for item in s:
#     r = item.upper() +r
# print(r)
#


def applyRules(lhch):
    rhstr = ""
    if lhch == 'A':
        rhstr = 'B'   # Rule 1
    elif lhch == 'B':
        rhstr = 'AB'  # Rule 2
    else:
        rhstr = lhch    # no rules apply so keep the character

    return rhstr


def processString(oldStr):
    newstr = ""
    for ch in oldStr:
        newstr = newstr + applyRules(ch)

    return newstr


def createLSystem(numIters,axiom):
    startString = axiom
    endString = ""
    for i in range(numIters):
        endString = processString(startString)
        startString = endString

    return endString

print(createLSystem(4, "A"))


def drawLsystem(aTurtle,instructions,angle,distance):
    for cmd in instructions:
        if cmd == 'F':
            aTurtle.forward(distance)
        elif cmd == 'B':
            aTurtle.backward(distance)
        elif cmd == '+':
            aTurtle.right(angle)
        elif cmd == '-':
            aTurtle.left(angle)
