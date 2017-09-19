
                    #in console#
# file = open('fileio.py', 'r')  this only reads the file
# file = open('fileio.py', 'w') this will allow you to write the file *warning, it deletes all contents upon writing


#file_handle.write('this is silly\n') this will write things to the file.

#contents  (this will display the contents to the file)
# file_handle.close() (this will close the file)


import io

#Write a program that prompts the user to enter a file name, reads the contents of the file and prints it to the screen.


file=(input("What file do you want to open?"))

file= open(file, 'r')
contents=file.read()

print(contents)
file.close()

#Write a program that prompts the user to enter a file name, then prompts the user to enter the contents of the file, and then saves the content to the file.
file=(input("What file do you want to open?"))

file= open(file, 'w')

file.write('this is silly\n')
file.close()


