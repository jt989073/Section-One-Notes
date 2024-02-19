# {key_expression: value_expression for item in iterable}

# names = ['james', 'gabe', 'andrew']

# name_lens = {name: len(name) for name in names}

# print(name_lens)

point_dict = {'james': 10, 'gabe': 30, 'carmen': 4}

plus_five_dict = {name: points + 5 if points >= 5 else points for name, points in point_dict.items() }

print(plus_five_dict, point_dict)
