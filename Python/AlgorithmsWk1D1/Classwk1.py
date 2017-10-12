                    # What is an algorith?

# "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer."
# "Word used by programmers when they do not want to explain what they did"






## How you sort the data from an array.

from pprint import pprint as pp

class bubble_sort():

    def main(self, my_array):
        is_sorted = False
        array_len = len(my_array)
        while not is_sorted:
            is_sorted = True
            array_len = array_len - 1
            for i in range(0, len(my_array)):
                if i + 1 == len(my_array):
                    continue
                if my_array[i] > my_array[i+1]:
                    temp = my_array[i]
                    my_array[i] = my_array[i+1]
                    my_array[i+1] = temp
                    is_sorted = False
        return my_array


if __name__ == "__main__":
    my_array = [3, 1, 8, 9, 7, 5]
    main = bubble_sort()
    result = main.main(my_array)
    print(result)

# One of the most under-used functions of Python is the DIR functions.



