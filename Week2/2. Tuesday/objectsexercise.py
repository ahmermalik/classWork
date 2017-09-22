

class Person:
    def __init__(self, name, email, phone, friends=0):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0

    def greet(self, other_person): #greet is method aka function. other_person is an argument
        self.greeting_count+=1
        print ('Hello {}, I am {}!'.format(other_person.name, self.name))
        print('My phone number is {}!'.format(other_person.name))

    def goodbye(self, other_person):
        print('Goodbye {}'.format(other_person.name))

    def print_contact_info(self):
        print("{}'s email address is {}, Sonny's phone number is {}.".format(self.name, self.email, self.phone))

    def add_friends(self, friend):
        self.friends.append(friend)



sonny = Person('Sonny','sonny@hotmail.com','483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)
jordan.greet(sonny)
print(sonny.greeting_count)
print(jordan.greeting_count)
# sonny.goodbye(jordan) #sony is self and jordan is other_person

# sonny.print_contact_info()
# jordan.add_friends(sonny)
# sonny.add_friends(jordan)
# print(len(jordan.friends))

# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
#
#     def vehicledetail(self):
#         print('The make of your vehicle is: {}\n'.format(self.make))
#         print('The model of your vehicle is: {}\n'.format(self.model))
#         print('The year of your vehicle is: {}\n'.format(self.year))
#
#     def print_info(self):
#         print(car.make, car.model, car.year)
#
#
# car = Vehicle('Nissan','Altima SL', '2015\n') #creating an instance for the class vehicle aka creating
#                                             #an object for the class Vehicle
# print(car.make, car.model, car.year)   #grabs the details from constructors to print
#
# car.vehicledetail() #prints the vehicledetail method
# car.print_info()    #prints the print_info method
