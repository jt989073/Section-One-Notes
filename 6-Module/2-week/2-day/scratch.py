# names = ['James', 'Seika', 'Eiki']
# pets = {
#     'James': ['Trigger', "Joey"],
#     'Seika': ['Tora', 'Sonic', 'Dragon'],
#     'Eiki': ['Hime', 'Koga']
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# # print(name_iter)
# # print(pet_iter)

# # print(next(name_iter))
# # print(next(pet_iter))
# while True: 
#     if next(name_iter) == 'Eiki':
#         print('found it')
    # next(name_iter)
    
# my_string = 'something'
# print(iter(my_string))

# creating
# my_dict = {'hello': 'world'}


# print(my_dict['hello'])
# my_dict['goodbye'] = 'moon'

# for k,v in my_dict.items():
#     print(k,v, 'line 29')
    
# my_dict['some_new_key'] = 'something goes here'

# for k,v in my_dict.items():
#     print(k,v, 'line 34')

# other_dict = dict(first=1, second=2, banana=3) #naming with kwargs

# print(other_dict)\\
    
# tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
# tuple_dict = dict(tuple_list)
# # print(tuple_dict)

# # creating
# my_dict = {'hello': 'world'}
# # print(my_dict)

# print(my_dict['hello'])
# print(my_dict.hello) # Does not work like it does in JS

# my_var = 'goodbye'
# my_dict[my_var] = 'moon'
# print(my_dict)
# # my_dict.update({'hello': 'earth'})
# my_dict['hello'] = 'earth'
# print(my_dict)
# del my_dict['hello']
# print(my_dict)
# print(tuple_dict.keys()) # list-like Object.keys(tupe_dict)

# print(tuple_dict.values()) # list-like
# items = [*tuple_dict.items()] # list-like
# print(items)

# print({*tuple_dict.items()}) # set
# my_dict = {'hello': 'world', 'goodbye': 'moon', 'james': 'is_awesome'}

# my_new_dict = {**my_dict}
# my_new_dict['james'] = 'sucks'
# print(my_new_dict, my_dict)

# for key in my_dict:
#   print(key)

# for key in my_dict.keys():
#   print(key)

# for value in my_dict.values():
#   print(value)

# for k,v in my_dict.items():
#   print(k,v)

my_set = {1,2,3}
other_set = {3,4,5}

# print(my_set | other_set)
# print(my_set.union(other_set))

# my_set.update(other_set)
# my_list = [7,8,9,10]
# my_set.update(my_list)
# print(my_set)

# print(my_set & other_set)
# print(my_set.intersection(other_set))

# print(my_set - other_set)
# print(my_set.difference(other_set))
# print(other_set - my_set)

print(my_set ^ other_set)
print(my_set.symmetric_difference(other_set))