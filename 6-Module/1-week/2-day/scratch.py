# print('hello'[:1:2])
# print('hello ' * 3)

# word_1 = 'hello'
# word_2 = 'world'
# # format_sentence = '{0} {1}!'.format(word_1, word_2)

# # print(format_sentence)

# fstring_sentence = f'{word_1} this {word_2}!' 

# print(fstring_sentence)

# questions = 20
# num_correct = 10

# # score = f'You got {num_correct/questions:%}'
# score = f'You got {num_correct/questions:.0%}'

# print(score)

# print(20 / 6)

# num = 20

# num -= 1

# print(num)



def james_function(my_string):
    return my_string.upper()
# print(james_function('james'))

# Write your function, here.
def is_palindrome(word):
  new_word = ''.join(reversed(word))
  print(reversed(new_word))
  return new_word == word


print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False
