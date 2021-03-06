#Class Example  1

# class Person:
#     def greet (self):
#         print('Hello')
#
#
# print(Person)
#
# me = Person()
# me.greet()


#Class Example  2


# class Person:
#     def __init__(self, name, age=25):
#         self.name = name
#         self.age = 25
#         self.age = age
#     def greet (self,friend):
#         print("Hello {} and {}".format(self.name, friend))
#
#
# me = Person('Ahmer')
# me.greet('Paul')


#                               3 types of methods ("default" is just self method, Classmethod, Staticmethod,....)
class Person:
    def __init__(self, name, age=25):
        self.name = name
        self.age = 25
        self.age = age
    def greet (self,friend):
        if friend.age <30:
            print('Yo dude')
        print("Hello {} and {}".format(self.name, friend.name))
    @classmethod
    def create(cls):                                #classmethod passes the class information @classmethod is called decorators.
        name = input('What is your name? ')         #if you replace the cls. to person. it wil call the person class.
        name = cls.fix_name(name)                   #This is where you create the instance
        return cls(name)
    @staticmethod
    def fix_name(name):
        return name.replace('-',' ')

class SuperMan(Person):
    pass

me = Person('Ahmer') #this is using the default method.
print(me.name)
me.greet(me)


me = SuperMan.create()
print(me.name)
me.greet(me)
#######################################################
#                       Inheritance
class Animal:
    def __init__(self, name):
        self.name = name

class Dog (Animal):
    def woof(self):
        print("woof")

class Cat (Animal):
    def meow(self):
        print("Meow")

#                            #Super class- It does everything your parent class does, but more. This one has 'sound'.
class Dog(Animal):
    def __init__(self, name, sound):
        self.sound = sound
        super().__init__(name)      #calls the parent function and passes the name to the parent function, the super class wont handle this.
    def woof(self):
        print(self.sound)

dog1 = Dog('fifi','woof')

dog2 = Dog('foofoo', 'yip yip')
dog1.woof()
dog2.woof()


class CatDog(Cat, Dog):
    pass

class DogCat(Dog, Cat):                 #create new animal class because you didn't originally have one.
    pass                                #This passes the functions from parent class through to the new classw

dogcat1 = DogCat('ROMEOW', 'MEWOOF')

dogcat1.woof()

#               #Mixing various classes together. This creates Robot class and combines it with the CAT & DOG class from parent function#
class Robot:
    def auto_destruct (self):               #making the robo cat self destruct when called
        print('Boom')

class RoboCat(Robot, Cat):
    pass

class RoboDog(Robot, Dog):
    pass

cat1 =RoboCat('foofoo')
cat1.name
cat1.auto_destruct()                        #robocat auto_destruct() when called

