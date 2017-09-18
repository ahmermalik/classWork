
# for i in range(0,101):
#     if i % 3 == 0 and i % 5== 0:
#         print("FizzBuzz")
#     elif i % 3 == 0:
#         print("Fizz")
#     elif i % 5 == 0:
#         print("Buzz")
#     else:
#         print(i)

# total = 0
# for i in range(0,1000):
#     if i % 3 == 0 or i % 5 == 0:
#         total = total + i
# print(total)

#fibonacci
# def fibonnaci():
#     a = 0
#     b = 0
#     fib = []
#     i = 1
#
#     while (i < 4000000):
#         a = i
#         i = a + b
#         b = a
#         fib.append(i)
#
#     print(fib)
#
#     total = 0
#     for i in fib:
#         if i % 2 == 0:
#             total = total + i
#     print(total)
#
#
#
# def primefactors(x):
#     primelist = []
#     for i in range(2,x):
#         if x % i == 0:
#             primelist.append(i)
#     # print(max(primelist))
#     print(primelist)
#
# # primefactors(13195)
# primefactors(60085)
#


import math
def primefactors(x):
    primelist = []
    # for i in range(2,int(math.sqrt(x))):
    for i in range(2,x):
        if x % i == 0:
            primelist.append(i)
    print(max(primelist))

# primefactors(13195)
# primefactors(600851475143)

def primeit(x):
    primelist = []
    for i in range(2,x):
        if x % i == 0:
            primelist.append(i)
    return len(primelist)


def algorithm5():
    primes = []
    for i in range (1,21):
        if primeit(i) == 0:
            primes.append(i)
    print(primes[6])
# algorithm5()

#find prime factors efficiently
def primefactors(x):
    primelist = []
    for i in range(2,x):
        if x % i == 0:
            primelist.append(i)
    print(primelist)

primelist = []
i = 1
while i > 0 and i < 30:
    i = i + 1
    for x in primelist:
        if i % x == 0:
            i = i + 1
    primelist.append(i)

print (primelist)