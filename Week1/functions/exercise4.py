import matplotlib.pyplot as plot

def f(x):
    if x % 2 ==0: #if the remainder of x is 0, return -1 because it's even.

        return -1

    if x % 2 ==1: #if the remainder of x is 1, return 1 because it's odd.

        return 1


xs = list(range(-5, 5)) #the range of the function
ys = []                 #each time you loop through the x and get the modulo remainder, the value gets stored in y.
for x in xs:            #each time it loops from 0 to 5 and 0 to -5 it saves the number in ys[] list.
    ys.append(f(x))

plot.bar(xs, ys)
plot.show()
