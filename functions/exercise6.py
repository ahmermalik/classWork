import matplotlib.pyplot as plot
import math
from numpy import arange


def f(x):
    x = math.sin(x)

    return x
xs = arange(-5, 5, 0.1) #the range of the function
ys = []                 #each time you loop through the x and get the modulo remainder, the value gets stored in y.
for x in xs:            #each time it loops from 0 to 5 and 0 to -5 it saves the number in ys[] list.
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()
