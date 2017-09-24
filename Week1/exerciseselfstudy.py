import turtle

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


# def applyRules(lhch):
#     rhstr = ""
#     if lhch == 'A':
#         rhstr = 'B'   # Rule 1
#     elif lhch == 'B':
#         rhstr = 'AB'  # Rule 2
#     else:
#         rhstr = lhch    # no rules apply so keep the character
#
#     return rhstr


# def processString(oldStr):
#     newstr = ""
#     for ch in oldStr:
#         newstr = newstr + applyRules(ch)
#
#     return newstr
#
#
# def createLSystem(numIters,axiom):
#     startString = axiom
#     endString = ""
#     for i in range(numIters):
#         endString = processString(startString)
#         startString = endString
#
#     return endString
#
# print(createLSystem(4, "A"))

#Looping and counting

def count(text, aChar):
    lettercount = 0
    for c in text:
        if c == aChar:
            lettercount = lettercount + 1
    return lettercount

print(count("afunnybunny", "a"))


# To find the locations of the second or third occurrence of a character in a string,
# we can modify the find function, adding a third parameter for the starting position in the search string:
# Save & Run

def find2(astring, achar, start):
    """
    Find and return the index of achar in astring.
    Return -1 if achar does not occur in astring.
    """
    ix = start
    found = False
    while ix < len(astring) and not found:
        if astring[ix] == achar:
            found = True
        else:
            ix = ix + 1
    if found:
        return ix
    else:
        return -1

print(find2('banana', 'a', 2))