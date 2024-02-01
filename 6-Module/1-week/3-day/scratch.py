# class Dog:
#     def sound(self):
#         return "Woof!"

# class Cat:
#     def sound(self):
#         return "Meow!"

# class Duck:
#     def sound(self):
#         return "Quack!"

# def make_sound(animal):
#     return animal.sound()

# # Using duck typing in function
# dog = Dog()
# cat = Cat()
# duck = Duck()

# print(make_sound(dog))  # Outputs: Woof!
# print(make_sound(cat))  # Outputs: Meow!
# print(make_sound(duck))  # Outputs: Quack!


# will throw an error
# a = 321
# print(len(a))
# wont throw an error
# if hasattr(a, '__len__'):
#     print(len(a))
# # # the length will print out
# b = "5555"
# if hasattr(b, '__len__'):
#     print(len(b))\

# print(some_var)

# some_var = 'someVariable'


# some_var = 123

# print(type(some_var))

# def my_func(word):

#     print(letter)
#     letter = word[0]
    
    
# my_func('word')

# highest_num = longest_string_len = counter = 0
# highest_num = 0
# longest_string_len = 0

# longest_string_len += 2


# print(highest_num, longest_string_len, counter)

# some_variable = 'something'

# some_variable = 123213

# print('something' // 12)

# def my_func(n1, n2):
#     # print(type({'james': 'thompson'}))
#     return n1 // n2
    
# print(my_func(10, 2))

# name = 'Petasdfer'
# if name == 'Tony':
#   print('Hello Tony')
# elif name == 'Peter':
#   print('Hello Peter')
# else:
#   print('Hello')


# num = 0
# while(num <= 5):
#     print(num)
#     num += 1

# string = 'james'
# i = 0
# for letter in string:
#     print(letter, i, string[i])
#     i += 1
    
# for i in range(len(string)):
#     print(i, string[i])
    
# simple error catching
# a = 321
# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))


def my_func():
    a = 100
    # b = "5"
    # b = 0
    b = 5
    # print(res)
    try:
       res = a / b
    except ZeroDivisionError as e:
        print(e)
        pass
    except (TypeError, NameError) as e:
        print("ERROR!", e)
    finally:
        print("Finally...")
        return res
    
    # return res

print(my_func())