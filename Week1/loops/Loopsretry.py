#Ahmer Malik 9/16/2017

# Loop Exercises

                                                            # 1. 1 to 10
# Using a for loop and the range function, print out the numbers between 1 and 10 inclusive, one on a line. Example output:

# def sloop():
#
#     for i in range(1,11):
#         print (i)
#
# sloop()


                                                            # 2. n to m
# Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session:

# a=[]
#
# b = int(input('Enter start number: '))
#
# e = int(input('Enter end number: '))

# for i in range(b,e):
#
#     print(i)
#
#     a.append(i)
#
# print(a)

                                                            #3. Odd Numbers
# Print each odd number between 1 and 10 inclusive. Example output:
# Hint: you will need to use the modulus operator % to determine whether a number is odd or even.

# for i in range(0,10):
#
#     if i % 2 == 1:
#         print(i)

                                                            #4. Print a Square

#Print a 5x5 square of * characters. Example output:

# n = int(input('How many squares would you like to print?'))

# for i in range(0, n):

#         print(n*"*")


# 7. Print a Triangle

# Print a triangle consisting of * characters like this:

n = int(input('How many squares would you like to print?'))

for i in range(0,n+1):
    print((n - (n - i)) * "*")



