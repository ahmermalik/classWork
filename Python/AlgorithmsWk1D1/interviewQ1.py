# Interview Question
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 50,000,000.



from pprint import pprint as pp

# class sum_finder():
#     def main(self, max):
#         total = 0
#         for i in range(1,max):
#             if i% 3 == 0 or i % 5 == 0:
#                 total = total + i
#         return total
#
# if __name__ == "__main__":
#     main = sum_finder()
#     result = main.main(50000000)
#     print(result)


from pprint import pprint as pp
class sigma_finder():
    def main(self, limit):
        result = 0
        for i in range(1, limit):
            if i % 3 == 0 or i % 5 == 0:
                result = result + i
        return result
if __name__ == "__main__":
    limit = 50000000
    main = sigma_finder()
    result = main.main(limit)
    print("The sum of all the multiples of 3 or 5 below %s is %ss" % (limit, result))