#Ahmer Malik
from matplotlib import pyplot

def f(x):
    return 2 * x +1

def g(x):
  return x + 1

f_output =[]
g_output =[]

x_list = list(range(-3,5))

for x in x_list:
    f_output.append(f(x))
    g_output.append(g(x))

pyplot.plot(x_list, f_output, x_list, g_output)
pyplot.show()




# def hello(first_name=None, last_name=None):
#     print('Hello {} {}'.format(first_name, last_name))

# def hello (*args, **kwargs):
#     print(args)
#     print(kwargs)
#
# hello(1,2,4, name="ahmer", color="red")

#globla vs local functions
# word = ['hello','world']  #this is a global function
# def display_list():
#     print(word)
# display_list()


 #globla vs local functions
# def display_list():
#     word = ['hello', 'world'] #this is a local funciton. notice that the print(word) below will not work since it is outside of the function
#
# display_list()
#
# print(word)


