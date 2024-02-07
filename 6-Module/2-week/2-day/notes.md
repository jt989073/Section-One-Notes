# M6-W2-D2

## Dictionaries

-   Collection of comma separated key:value pairs
-   Insertion ordered since python 3.7
    -   Prior to that, were unordered
-   Mutable
-   Dictionaries can't use dot notation like JS Objects

```py
# creating
my_dict = {'hello': 'world'}
print(my_dict)

other_dict = dict(first=1, second=2, third=3) #naming with kwargs
print(other_dict)

tuple_list = [(1, 'a'),(2, 'b'),(3, 'c')] #(key, value)
tuple_dict = dict(tuple_list)
print(tuple_dict)

# accessing
print(my_dict['hello'])
print(my_dict.hello) # Does not work like it does in JS

# adding
my_dict['new_key'] = 'new_value'
print(my_dict)

# updating
my_dict.update({'goodbye': 'planet'})
print(my_dict)

my_dict.update({'goodbye': 'world', 'hello': 'planet'})
print(my_dict)

# deleting
del my_dict['hello']
print(my_dict)

# copying, lists & list-likes
print(tuple_dict.keys()) # list-like
print(tuple_dict.values()) # list-like
print(tuple_dict.items()) # list-like

print(list(tuple_dict.keys())) # list
print([*tuple_dict.values()]) # list
print({*tuple_dict.items()}) # set
print({**tuple_dict}) # dictionary


# iterating
for key in tuple_dict:
  print(key)

for key in tuple_dict.keys():
  print(key)

for value in tuple_dict.values():
  print(value)

for k,v in tuple_dict.items():
  print(k,v)
```

## Sets

-   A collection of unique hashable (immutable/primitive) elements
-   Mutable
-   Unordered

```py
my_set = {1,2,3}
other_set = {3,4,5}

# union - the result of combining two sets
print(my_set | other_set)
print(my_set.union(other_set))

# like dictionaries, you can update a set
my_set.update(other_set)
print(my_set)

# can be passed any iterable
my_set.update([1, 10, 4, 11, 3, 7])
print(my_set)

# intersection - the result of only the non-unique items in two sets
print(my_set & other_set)
print(my_set.intersection(other_set))

# difference - the result set1 after removing anything present in set2
print(my_set - other_set)
print(my_set.difference(other_set))
print(other_set - my_set)

# symmetric difference - the result of only the unique items in two sets
print(my_set ^ other_set)
print(my_set.symmetric_difference(other_set))
```
