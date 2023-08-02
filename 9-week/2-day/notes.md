# M2W3D2

## Practice Pt. 3: 40 mins

- You will ACTUALLY copy/paste your code from pt.2 then add timings
- [Class Google Sheet]
- You'll each present your findings and tell me, based on your graph, what time\
  complexity you think we see here.
  - If you need help Google sheet instructions are in the homework/Google

## Big-O Notation: Rest of Class

- Some questions to start us off...
  - Why can't we effectively use 'time' to test the efficiency of our code?
    - Many variables affect what happens on our machine and how fast it runs things. ie RAM, weather, computer temperature, all kinds of things
  - What is Big-O notation concerned with?
    - Best, average or worst case?
      - worst case scenarios are what we care about when looking into big O
    - Specific tests run or general trend of many tests run?
      - we are moree concerned with a general trend of many tests
    - Tests with similar sizes, or tests with different sizes?
      - different sizes because we want to think about all different applications when we run a program
    - What are the three complexities we read about?
      - constant -> O(1)
      - linear -> O(n)
      - quadratic -> O(n ^ 2)
    - So... what is Big-O?
      - growth curve, basically how the programs effeciency runs over time
      - standard mathematical notation to show how effecient a algorithm runs. 


## Simplifying Big-O

- We can remove coefficients
  - n is going to affect the trend MUCH more than a constant number.

    ```text
      5n => O(n)
      2n^2 => O(n^2)
      5 => O(1)
    ```

- We can remove the smaller complexity when using addition

  ```text
    n^2 + n => 
    5 + n => 
  ```

- Let's simply!

  - 4n^2 + n + 4 => 
  - n^2 + n => 
  - 1 + 12 + 1000000 => 

## If time is left

- Look through some past weeks functions, can you define their time complexity?
  - If not, ask a TA

