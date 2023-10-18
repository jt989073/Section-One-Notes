# M2W3D4

## Binary Practice (15 min)

## Lecture Part 1
### Base 10 - "Normal"


You learned to count in a base 10 system. All numbers are based on a 0-9
counting pattern.
0, 1, 2, 3, 4, 5, 6, 7, 8, 9....

- when you get to the last digit, you simply increase the number to the left and
 start over from 0


### Base 2 - Binary
- 2 Key points:
  - binary is all 0s and 1s
  - binary digits are called bits
    - a group of 8 bits is a byte

#### How to count in binary


```
0000 - 0
0001 - 1
0010 - 2
0011 - 3
0100 - 4
0101 - 5
0110 - 6
0111 - 7
1000 - 8
```


- The pattern is: 0 and 1 are the same a base 10, but then you run out of digits.
  - The right most digit returns to 0 and the digit to the left increments by 1
- '0b' prefix identifies string/num as binary:  0b0100 -> 4
- Avoids confusion, 8 -> 0b1000 to differentiate from base 10 number 1000


### Converting from binary to decimal (base 10)

Formula: Multiply each digit by the number base raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

2 ^ position of the number starting from the right * the number at  the position

To convert 0b11001010 to decimal, remember the base is 2:


```
2^0 *0 = 0
2^1* 1 = 2
2^2 *0 = 0
2^3* 1 = 8
2^4 *0 = 0
2^5* 0 = 0
2^6 *1 = 64
2^7* 1 = 128
```
Add all of those sums together to get 2 + 8 + 64 + 128 = 202


## Write a javascript function that converts Binary to Decimal

---


Add all of those sums together to get 2 + 8 + 64 + 128 = 202

## Write a javascript function that converts Binary to Decimal (20 min)

## Lecture Part 2

### Base 16 - Hexadecimal

hex = 6, dec = 10, hence hexadecimal (6 + 10 = 16)

Counting follows this pattern:
The digits are 0-9 with A, B, C, D, E and F representing 10, 11, 12, 13, 14 and
15, respectively. Hexadecimal numbers (sometimes called 'hex' for short) are
prepended with an '0x' to differentiate them as base-16.

- Hexadecimal is often used as shorthand for representing binary values:
  - one hex digit can represent four bits.


```
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
16 = 0x10
17 = 0x11
18 = 0x12
19 = 0x13
20 = 0x14
21 = 0x15
22 = 0x16
23 = 0x17
24 = 0x18
25 = 0x19
26 = 0x1A
27 = 0x1B
28 = 0x1C
29 = 0x1D
30 = 0x1E
31 = 0x1F
32 = 0x20
33 = 0x21
34 = 0x22
```

To convert A1 from hexadecimal to decimal, we use the same formula as above:

```
16^0 *1 =    1* 1 = 1
16^1 *a (10) =   16*  10 = 160
```


To convert A1 from hexadecimal to decimal, we use the same formula as above:

16^0 *1 =    1* 1 = 1
16^1 *a (10) =   16*  10 = 160


160 + 1 = 161

To convert the hex number 0xF23C:
```
16^0 *C =    1* 12 = 12
16^1 *3 =   16*  3 = 48
16^2 *2 =  256*  2 = 512
16^3 *F = 4096* 15 = 61440
```
Add the sums together to get 61440 + 512 + 48 + 12 = 62012


## Write a function that converts hex to decimal

---
=======

Add the sums together to get 61440 + 512 + 48 + 12 = 62012

## Write a fuction that converts hex to decimal (20min)

## Lecture Part 3

### Bytes, kilobytes, megabytes, gigabytes, terabytes

1 byte = 8 bits

#### Recall from grade school
```
kilo - thousand
mega - million
giga - billion
tera - trillion
peta - quadrillion
exa - quintillion
zetta - sextillion
yotta - septillion

```

### ASCII

- `String.fromCharCode()`

```javascript
console.log(String.fromCharCode(65));
```

- `String.prototype.charCodeAt()`

```javascript
const str = 'ABC';
console.log(str.charCodeAt(0));
```

## General Conversion Tips

```javascript
// Convert Hexadecimal to Base10 & back`
let hexNum = parseInt('0xa1', 16);      // 161
let hexStr = Number(hexNum).toString(16);  // 'a1'

// Convert Binary to Base10 & back`
let binNum = parseInt('10110', 2);      // 22
let binStr = Number(binNum).toString(2);   // '10110'
```

```js
let num = parseInt('0xa1', 16);      // 161
let str = Number(num).toString(16);  // 'a1'
```


## Binary Extra Practice
 