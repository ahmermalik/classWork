#Ahmer Malik 9/18/2017


                                    # Exercise 1

# Given the following dictionary, representing a mapping from names to phone numbers:

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923',
#     'Ahmer' : '832-541-0785'
# }

# Print Elizabeth's phone number.

#print(phonebook_dict['Alice'])

# Add a entry to the dictionary: Kareem's number is 938-489-1234.
#phonebook_dict['Kareem']='938-489-1234'

#print(phonebook_dict['Kareem'])

# Delete Alice's phone entry.
#del phonebook_dict['Alice']
#print(phonebook_dict['Alice']) #test whether Alice still exists in phonebook_dict

#Change Bob's phone number to '968-345-2345'.
#phonebook_dict['Bob']= '968-345-2345'


#Print all the phone entries
#print(phonebook_dict)

                                     # Exercise 2: Nested Dictionaries

ramit = {
    'name': 'Ramit',
    'email': 'ramit@gmail.com',
    'interests': ['movies','tennis'],
    'friends': [
    {
    'name': 'Jasmine',
    'email': 'jasmine@yahoo.com',
    'interests': ['photography', 'tennis']
    },
    {
    'name':'Jan',
    'email': 'jan@hotmail.com',
    'interests':['movies', 'tv'],
    },
    {
    'name': 'Ahmer',
    'email':'ahmer9800@gmail.com',
    'interests': ['coding', 'running'],
        }
]

}

#Write a python expression that gets the email address of Ramit.

print("Ramit's e-mail address: " + ramit['email'])

# for email, value in ramit.items():
#     print(email,':', value)



# Write a python expression that gets the first of Ramit's interests.


print("Ramit's first interest is: "+ramit['interests'][0])
# for key, value in ramit.items():          #look up values using .items
#     print(key, ':', value)

# for keys in ramit.keys():                 #look up values using .keys
#     print(keys, ':', ramit[keys])


#Write a python expression that gets the email address of Jasmine.
print("Ramit's friend Jamsime's email address is: " +ramit['friends'][0]['email'])

#Write a python expression that gets the second of Jan's two interests.

print("Ramit's friend Jan's second interest is: "+ramit['friends'][1]['interests'][1])


print(ramit['friends'][0])




def histogram(string):
    emptylist = {}
    for char in sorted(string):
        if char in emptylist:
            emptylist[char] += 1
        else:
            emptylist[char] = 1
    return emptylist

print(histogram('Yoooo this shit is crazy yo'))





# you will need a temporary string emptyString = ('')
#you will go through the string using a for loop. when you hit the


def word_histogram(string):
    list = {}
    temp = ''
    for char in string.lower():
        if char == ' ':
            if temp in list:
                list[temp] += 1
                temp = ''
            else:
                list[temp] = 1
                temp = ''
                print(temp)
        else:
            temp += char
            print(temp)
    if temp in list:
        list[temp] += 1
    else:
        list[temp] = 1
        print(temp)         #Checks letters
    return list

print(word_histogram('I just want to become a very good programmer and a very good pianist'))