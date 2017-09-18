#
# exercise1 = "hello, this is pretty cool.".upper()
# exercise2 = "hello, this is pretty cool.".title()
#
# print(exercise1)
#
# print(exercise2)
#
# exercise3 = "hello world"
#
# print(exercise3[::-1])
#
newstr=[]

Translate = "Some say the blacker the berry, the sweeter the juice, I say the darker the flesh then the deeper the roots".upper()

A = 4
E = 3
G = 6
I = 1
O = 0
S = 5
T = 7
for i in Translate: #it loops through each character in the string above and finds the declared numbers below to see if there are any matches
    if i == "A":
        i = 4
    elif i =="E":
        i = 3
    elif i=="G":
        i=6
    elif i=="I":
        i=1
    elif i=="O":
        i=0
    elif i=="S":
        i=5
    elif i=="T":
        i=7

    newstr.append(i) #appends the string into a newstring called newstr
newstr = ''.join(map(str,newstr)) #adds the letters of the str to newstr and join it so it doesn't look like "5" "0" "M" "3" (Some)
print(newstr) #prints combined new str



def long_vowels(str):
    str = str.replace('ee', 'eeeee')
    str = str.replace('oo', 'ooooo')
    return str
print("Normal: A foolish bunny, overlooked the keen turtle.")
print(long_vowels("Long-long vowels: A foolish bunny, overlooked the keen turtle."), "\n")
