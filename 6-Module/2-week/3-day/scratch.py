# JavaScript-y way of using decorators
# Messy, hard to follow with complex functions

# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper

# def my_func(arg):
#     # Pretend this function does something
#     return arg


# my_func = my_decorator(my_func)

# print(my_func('Pretend '))

# Looks cleaner, you'll be seeing this a lot later
# def my_decorator(func_being_decorated):
#     def wrapper(another_arg):
#         another_arg += 'something happened again'
#         return func_being_decorated(another_arg)
#     return wrapper


# @my_decorator
# def my_func(arg):
#     # Pretend this function does something
#     return arg


# print(my_func('Pretend '))


# print(my_func)
# print(dir(my_func))
# print(my_func.__closure__)
# print(my_func.__closure__[0].cell_contents)

# def greeting_maker(hello_word):
#     def name_input(name):
#         return f'{hello_word}, {name}!'
#     return name_input


# hello_greeting = greeting_maker('goodbye')
# print(hello_greeting.__closure__)  # notice you get back a tuple

# # the first item in the tuple, in this case the only item
# print(hello_greeting.__closure__[0])

# # the value held in the closure
# print(hello_greeting.__closure__[0].cell_contents)

# basic decorators
# def greeting_decorator(greeting_func):
#     # 1. decorator function intakes a function to invoke
#     # 2. wrapper function is defined
#     def greeting_wrapper(name):
#         # 3. code to run
#         # 4. decorator functions argument is invoked
#         print(f'{greeting_func()}, {name}!')
#     # 5. wrapper function is returned
#     return greeting_wrapper

# @greeting_decorator
# def hello():
#     return 'Hello'


# print("closure func:", hello)
# # <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
# print("closure func closure:", hello.__closure__)
# # (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
# print("closure func closure contents:",
#       hello.__closure__[0].cell_contents)
# <function hello at 0x7f3125a26af0>

# Write your function here.
# def chain_decorator(func):
#   def wrapper(*args):
#     var = func(*args)
#     return var * var
#   return wrapper
  
# def multiplied_by_three(func):
#   def wrapper(*args):
#     print(*args)
#     var = func(*args)
#     return var * 3
#   return wrapper

# @chain_decorator
# @multiplied_by_three
# def num(a, b):
#   print(a, b)
#   return a + b

# num(5, 2)  #> 441


# simple py class
# class Dog:
#     # doesn't have to be self, but is always self by convention
#     def __init__(self):
#         self.sound = 'woof'


# my_dog = Dog()
# print(my_dog)
# print(my_dog.sound)

# using methods
# class Dog:
#     def __init__(self):
#         self.sound = 'woof'

#     def make_sound(self):
#         print(self.sound)

#     def change_sound(self, sound):
#         self.sound = sound


# my_dog = Dog()
# my_dog.make_sound()
# # notice that we aren't passing in self
# # python does this automatically
# my_dog.change_sound('bark')
# my_dog.make_sound()


# setting initial state
# class Dog:
#     """
#     This is just a description of the class.
#     This helps other devs understand how to use your class
#     It expects to receive the positional arguments
#     (str:name, str:sound)
#     """

#     def __init__(self, name, sound):
#       self.name = name
#       self.sound = sound


# dog_1 = Dog('Callie', 'woof')

# print(dog_1.name, dog_1.sound)
# print(dog_1.__doc__)

# print(['string of somethihng'].__doc__)

# class Dog:
#     def __init__(self, name, sound):
#         """
#         Use a leading underscore on instance variables
#         that shouldn't be accessed when using the class.
#         This isn't an actual python feature, its a convention.
#         All instance variables should be private,
#         except for any variables you explicitly want to be public
#         """
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound
    
#     def change_sound(self, new_sound):
#       self._sound = new_sound


# dog_1 = Dog('Callie', 'woof')
# print(dog_1.get_name(), dog_1.get_sound())
# dog_1.change_sound('howl')
# print(dog_1._sound)

# reserving memory
# class Dog:
#     # Not required, just a memory optimization
#     # Python devs will often build a class, then fill in slots last
#     __slots__ = ['_name', '_sound']

#     def __init__(self, name, sound):
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound


# dog_1 = Dog('Callie', 'woof')
# print(dog_1.get_name(), dog_1.get_sound())

# Pretty printing: because
# <__main__.Dog object at 0x7f36545b5fd0>
# is ugly
# class Dog:
#     __slots__ = ['_name', '_sound']

#     def __init__(self, name, sound):
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound

#     def __repr__(self):
#         # Another fancy dunder method
#         # python will use this whenever you try to print
#         # an instance of this class
#         return f'<Dog (name: {self._name}, sound: {self._sound})>'


# dog_1 = Dog('Callie', 'woof')
# print(dog_1)

# class Animal:
#     def sound(self):
#         return "Some generic sound"

# class Dog(Animal):
#     def sound(self):
#         return "Woof"

# class Cat(Animal):
#     def cat_sound(self):
#         return "Meow"
      
# animal = Animal()
# print(animal.sound())

# dog = Dog()
# print(dog.sound())  # Output: Woof

# cat = Cat()
# print(cat.sound())  # Output: Meow
# print(cat.cat_sound())  # Output: Meow

# no decorators
# class Dog:
#     def __init__(self):
#         self._sound = 'woof'

#     def get_sound(self):
#         return self._sound

#     def change_sound(self, new_sound):
#         self._sound = new_sound

#     def del_sound(self):
#         del self._sound


# my_dog = Dog()
# print(my_dog.get_sound())

# my_dog.change_sound('bark')
# print(my_dog.get_sound())

# my_dog.del_sound()
# print(my_dog.get_sound())

# with decorators
class Dog:
    def __init__(self):
        self._sound = 'woof'

    @property
    def sound(self):
        return self._sound

    @sound.setter
    def sound(self, new_sound):
        self._sound = new_sound

    @sound.deleter
    def sound(self):
        del self._sound
        print('no more sound')


my_dog = Dog()
print(my_dog.sound)

my_dog.sound = 'bark'
print(my_dog.sound)

del my_dog.sound
print(my_dog.sound)