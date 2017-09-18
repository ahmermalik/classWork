import random

# def guess_number():
#     my_random_number = random.randint(1, 10)
#     guess_number = True
#     print ("I am thinking of a number between 1 and 10.")
#     while guess_number:
#         userGuess = input("What's the number? ")
#         if userGuess == str(my_random_number):
#             print("That's correct!")
#             break
#         elif userGuess == str(userGuess) < str(my_random_number):
#             print (str(userGuess) + " is too low.")
#         else:
#             userGuess == str(userGuess) > str(my_random_number)
#             print(str(userGuess) + " is too high.")
# guess_number()





def play_again():
    try_again = input("Would you like to play again?").lower()
    if try_again == "yes":
        guess_number()

    elif try_again == "no":
        print("Okay, bye!")

    else:
        print("That answer doesn't make sense.")
        play_again()


def guess_number():



    my_random_number = random.randint(1, 10)
    guess_number = True
    print ("I am thinking of a number between 1 and 10.")

    current_number = 5

    while current_number > 0:
        userGuess = input("What's the number? ")

        if userGuess == str(my_random_number):
            print("That's correct!")
            play_again()
            break

        elif userGuess == str(userGuess) < str(my_random_number):
            current_number -= 1
            print (str(userGuess) + " is too low.")
            print("You have " + str(current_number)+ " guesses left.")


        elif userGuess == str(userGuess) > str(my_random_number):
            current_number -= 1
            print(str(userGuess) + " is too high.")
            print("You have " + str(current_number)+ " guesses left.")

    play_again()

guess_number()

