
#print loop range.
#
# for i in range(1,11):
#     print(i)

#user input start and end.

# s = int(input("Please enter a start number: "))
# e = int(input("Please enter a end number: "))
#
# for i in range(s,e +1):
#     print(i)

#loop through a range, but only with odd numbers
# for i in range (1,20,2):
#     print(i)

#print a 5x5 square
#
# for i in range(5):
#     print("*****")
#

#ask user input for N (how many squares)
def ask():
     return int(input("How many lines of *?"))

def squarer(size):
    for i in range(size):
        print("*" * size)

squarer(ask())

