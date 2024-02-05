# positional: a positional argument, works the same way as JS
# (*)args: any extra arguments that don't have a positional parameter. Type is a Tuple. Similar to rest parameter in js
# default: keyword argument with default value
# (**)kwargs: any arguments with a key=value pairing. Type is a Dictionary.
# def parameters(positional, *args, default='something_else', **kwargs):
#   print(positional, args, default, kwargs)

# parameters('hello', 1,2,3,4, test='test', world='earth', instructor='james')

# It is considered best practice to use positional arguments for parameters without default values and keyword arguments for parameters with default values
# def default_value(a, **kwargs):
#   print(a, kwargs)
#   for key in kwargs:
#       print(kwargs[key])
  
# # default_value('a')
# # default_value('a', 'c')
# default_value('a', b='d')

# yell = lambda a, b, c: print('something')
# print(yell(1,2,3))

# my_list = [1,2,3,4, 'james']
# print(my_list)

# my_range = range(1, 11, 2)

# for i in my_range:
#     print(i)

# my_list = [1,2,3,4,5,6, 8]

# for i in range(0, len(my_list), 2):
#     print(my_list[i], 'this is i ->>>', i)
    

# my_tup = (1,2,3,4)

# for i in range(len(my_tup)):
#     my_tup[i] = 12

# print(my_tup)


# my_dictionary = {}

# # print(my_dictionary)

# # my_set = {'james', 'gabe', 'someOne else awesome'}
# my_set = set({'james', 'gabe', 'something else'})

# print(type(my_dictionary))
# print(type(my_set))

# my_empty_list = []
# print(my_empty_list) #> []
# nums = [1,2,3,4, 4, 4]
# print(nums)        #> [1,2,3,4]
# print(nums[0])     #> 1
# print(nums[3])     #> 4
# print(nums[-1])    #> 4
# print(nums[1::2])   #> [2]

# print(nums[29])
# print('total', sum(nums))   #> 10
# print('max', max(nums))     #> 4
# print('min', min(nums))     #> 1
# print('avg', sum(nums) / len(nums)) #> 2.5
# print(sorted(nums, reverse = True))

# nums.append(5)
# print(nums)
# nums.remove(4)
# print(nums)

# del nums[0]
# print(nums)


