## Question 1
The error was that the code was getting the input values as strings and then
adding them. When two strings are added, no type conversions are done, so the 
result was just string concatenation.

## Question 2
I would fix it by converting `num1` and `num2` to numbers before adding them
together—see fix.png
