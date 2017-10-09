string = 'bananas'
counts_dict = {}

for char in string:
    counts_dict[char] = counts_dict[char] + 1
    print(counts_dict)