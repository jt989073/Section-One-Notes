# positional: a positional argument, works the same way as JS
# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.
# def parameters(positional, *args, default='default', **kwargs):
#   print(positional, args, default, kwargs)


# parameters('hello', 1,2,3,4, test='test', world='earth')



# # It is considered best practice to use positional arguments for parameters without default values and keyword arguments for parameters with default values
# def default_value(a, b='b'):
#   print(a, b)
# default_value('a')
# # default_value('a', 'c')
# default_value('a', b='d')

# yell = lambda input: input.upper()
# print(yell('hello'))

# test = lambda a, b, c: a + b + c

# print(test(2,2,2))

# kwarg_lambda = lambda  **kwargs : kwargs

# print(kwarg_lambda(james='james', gabe='gabe'))
# my_list = ['a', 'b', 'c', 'd']

# for i in range(len(my_list)):
#     print(my_list[i])

# my_something = {'james': 'thompson', 'gabe': 11}
# print(type(my_something))\
    
# num_list = [1,2,3,4]
# num_list_two = [5,6,7,4,8,8,8,8,8,8,9,10]
# combined_list = [*num_list, *num_list_two]
# combined = num_list.extend(num_list_two)
# count = num_list_two.count(8)
# print(count)
# num_list_two.clear()
# print(num_list_two)
# print(num_list_two)
# popped = num_list.insert(1, 0)
# print(popped, num_list)

# num_list.append(11)
# print(num_list)
# num_list.remove(1)

# print(num_list)

# # del num_list[0]

# num_list.remove(num_list[0])
# print(num_list)



# print(num_list[10])
# print(len(num_list))
# list_avg = lambda list: sum(num_list) // len(num_list)

# print(list_avg(num_list))