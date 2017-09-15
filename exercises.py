
# def exercise2():
#     name = input(('What is your name?').upper())
#     print(("Hello, " + name + "!").upper())
#     print(("Your name has ").upper(), len(name), (" letters in it! awesome!").upper() )
# exercise2()


# def exercise3():
#     print('Please fill in the blanks below:')
#
#     print("____(name)____'s favorite subject in school is ____(subject)____.")
#
#     name = input("What is name?")
#     subject = input("What is subject?")
#
#     print(name + "'s favorite subject in school is " +subject+".")
#
#
# exercise3()


# def exercise4():
#
#     day = int(input("Day (0-6)? "))
#
#
#     def Sun():
#         print("Sunday")
#     def Mon():
#         print("Monday")
#     def Tue():
#         print("Tuesday")
#     def Wed():
#         print("Wednesday")
#     def Thu():
#         print("Thursday")
#     def Fri():
#         print("Friday")
#     def Sat():
#         print("Saturday")
#
#     weekday = {
#         0 : Sun,
#         1 : Mon,
#         2 : Tue,
#         3 : Wed,
#         4 : Thu,
#         5 : Fri,
#         6 : Sat
#     }
#     print (weekday[day]())
# exercise4()

# def exercise5():
#
#     day = int(input("Day (0-6)? "))
#
#     def Mon():
#         print("Work")
#     def Tue():
#         print("Work")
#     def Wed():
#         print("Work")
#     def Thu():
#         print("Work")
#     def Fri():
#         print("Sleep in")
#     def Sat():
#         print("Work")
#     def Sun():
#         print("Sleep in")
#
#     weekday = {
#          0: Sun,
#          1: Mon,
#          2: Tue,
#          3: Wed,
#          4: Thu,
#          5: Fri,
#          6: Sat
#      }
#     print(weekday[day]())
exercise5()

def exercise6():
    cel = int(input("Please enter the temperature in Celsius: "))
    def celToFah(user):
        Fah= user * (1.8) +32
        if user < -273:
            print("This temperature is unattainable on this planet.")
        else:
            print(Fah)

    celToFah(cel)
# exercise6()


def exercise7():



    bill = float(input("What was the total bill?"))
    service = input("How was the service?")

    tipAmount = {
    "good": .2,
    "fair": .15,
    "bad": .1
        }

    if service == "good":
        tip = tipAmount[service] * bill

    if service == "fair":
        tip = tipAmount[service] * bill

    if service == "bad":
        tip = tipAmount[service] * bill

    print("\nYour bill was ${bill:.2f}, and your service was {service}.\n\nYou should tip ${tip:.2f}\n".format(bill=bill,service=service,tip=tip))


exercise7()

def exercise8():
    # (("Hello, " + name + "!").upper())


    bill = float(input("What was the total bill?"))
    service = input("How was the service?").lower()
    split = float(input("How many people will this bill be split between?"))


    tipAmount = {
    "good": .2,
    "fair": .15,
    "bad": .1
        }

    if service == "good":
        tip = tipAmount[service] * bill

    if service == "fair":
        tip = tipAmount[service] * bill

    if service == "bad":
        tip = tipAmount[service] * bill

    print("\nYour bill was ${bill:.2f}, and your service was {service}.\n\nYou should tip ${tip:.2f}\n".format(bill=bill,service=service,tip=tip))

    newTotal = bill + tip
    splitTotal = newTotal/split
    #print("Your total bill is: $"+ float(newTotal))
    print ("\nYour total of ${newTotal:.2f} split between {split:.0f} people will be ${splitTotal:.02f} per person. \n".format(newTotal=newTotal,service=service,splitTotal= splitTotal, split=split))
exercise8()


def exercise9():
    number = 0

    while number < 10:
        number += 1

        print(number)




exercise9()

def exercise10():

    coins = 0
    more_coins = True

    while more_coins:
        print("You have {0} coins.".format(coins))
        answer = input("Do you want another? Yes or no: ").lower()
        if answer == "yes":
            coins += 1
        elif answer == "no":
            print("Okay, bye!")
            want_coins = False
        else:
            print("That answer makes no sense. Try again.")


exercise10()