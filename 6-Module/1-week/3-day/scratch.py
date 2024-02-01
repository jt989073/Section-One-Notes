class Dog:
    def make_sound(self):
        return "Woof!"

class Cat:
    def make_sound(self):
        return "Meow!"

class Duck:
    def sound(self):
        return "Quack!"

    def make_sound(animal):
        return animal.sound()

# Using duck typing in function
dog = Dog()
cat = Cat()
duck = Duck()

print(make_sound(dog))  # Outputs: Woof!
print(make_sound(cat))  # Outputs: Meow!
print(make_sound(duck))  # Outputs: Quack!