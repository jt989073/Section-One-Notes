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
# # print(len(a))
# # wont throw an error
# if hasattr(a, '__len__'):
#     print(len(a))
# # # the length will print out
# b = "5555"
# if hasattr(b, '__len__'):
#     print(len(b))

# person = {'first_name': 'Ash', 'last_name': 'Ketchum'}
# person = {'first_name': 'Ash'}
# LBYL
# if 'first_name' in person and 'last_name' in person:
#   print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# else:
#   print('Missing keys')
# EAFP
# try:
#    print(f'Hello, {person["first_name"]} {person["last_name"]}!')
# except:
#   print('Missing keys')

# hightest_num = count = summ = 0

# count += 10

# summ += 30

# print(hightest_num, count, summ)

# print('something' // 30)

# def my_func():
#     pass

# print(my_func())

# print(str(2)== '2') 

# name = 'Peter'
# if name == 'Tony': print('Hello Tony')
# elif name == 'Peter': print('Hello Peter')
# else: print('Hello')
# a = 40
# b = 20

# min = print(a) if a < b else print(b)


# count = 0
# while count <= 10:
#     print(count)
#     count += 1

# standard for loop
# word = 'hello'
# count = 0
# for letter in word:
#   print(count, letter)
#   count += 1
# if you need an index
# print(range(len(word)))
# for i in range(len(word)):
#   print({i: word[i]})

# for(let i = 0; i < 10; i+=2) # not a thing

# simple error catching
# a = 321
# try:
#     print(len(a))
# except:
#     print('Silently handle error here')
#     # Optionally include a correction to the issue
#     a = str(a)
#     print(len(a))

#catching named errors
def try_except_func():
    a = 100
    b = "5"
    # b = 0
    # b = 5
    try:
        res = a / b
    except ZeroDivisionError:
        pass
    except (TypeError, NameError, ZeroDivisionError) as e:
        res = e
        print('hit this error', e)
    except SyntaxError as e: 
        print('didn\'t think of this error')
    finally:
        return res
        # print("Finally...")


print(try_except_func())