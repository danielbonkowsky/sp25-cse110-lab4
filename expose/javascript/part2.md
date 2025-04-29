## Question 1
The program will print 3. This happens because `i` was declared as a `var`,
and therefore will continue to exist outside the scope of the for loop.

## Question 2
The program will print 150. This happens because `discountedPrice` was declared
as a `var`, and its declaration is hoisted to the top of the function. It exists
outside the scope of the for loop, and so the last value it takes on (which is 
150) will be printed. 

## Question 3
The program will print 150. `finalPrice` has function scope, and so the last
value it takes on in the for loop (which is 150) will be printed.

## Question 4
The program returns the array `[50, 100, 150]`. Each value in the input array
`[100, 200, 300]` is discounted by 50% and then put into the return array.

## Question 5
The program errors at line 12. The `console.log` tries to print `i`, however `i`
is declared with `let` in the for loop. Variables declared with `let` have block
scope, and so `i` is destroyed before line 12.

## Question 6
The program errors at line 13. `discountedPrice` is declared inside the for loop
with the `let` keyword, giving it block scope, i.e., it's destroyed right after 
the for loop finishes running. That means when we try to `console.log` it, it
doesn't exist.

## Question 7
The program will print 150. `finalPrice` is declared at the top of the
function with the `let` keyword, meaning it will exist for the entirety of the 
function. When we `console.log` it, it will print the latest value it took on, 
which is 150.

## Question 8
The program returns the array `[50, 100, 150]`. Each value in the input array
`[100, 200, 300]` is discounted by 50% and then put into the return array.

## Question 9
The program errors at line 12. The `console.log` tries to print `i`, however `i`
is declared with `let` in the for loop. Variables declared with `let` have block
scope, and so `i` is destroyed before line 11.

## Question 10
The program prints 3. `length` stores the length of the `prices` array, and we 
pass in an array of length 3. 

## Question 11
The program returns the array `[50, 100, 150]`. Each value in the input array
`[100, 200, 300]` is discounted by 50% and then put into the return array.

## Question 12
### Part A
```js
student.name
```

### Part B
```js
student['Grad Year']
```

### Part C
```js
student.greeting();
```

### Part D
```js
student['Favorite Teacher'].name
```

### Part E
```js
student.courseLoad[0]
```

## Question 13
### Part A
```js
> '3' + 2
'32'
```
The 2 was converted to a string, and then the strings were concatenated

### Part B
```js
> '3' - 2
1
```
The `'3'` is converted into a number, and then js does 3 - 2.

### Part C
```js
> 3 + null
3
```
`null` is converted to its numeric representation (which is 0) and then addition
is done.

### Part D
```js
> '3' + null
'3null'
```
`null` is converted to its string representation (which is 'null') and then the
strings are concatenated.

### Part E
```js
> true + 3
4
```
`true` is converted to its numeric representation (which is 1) and then addition
is done.

### Part F
```js
> false + null
0
```
`false` is converted to its numeric representation (which is 0), and `null` is 
converted to its numeric representation (which is 0) and then addition is done.

### Part G
```js
> '3' + undefined
'3undefined'
```
`undefined` is converted to its string representation (which is 'undefined') and
then the strings are concatenated.

### Part H
```js
> '3' - undefined
NaN
```
`'3'` is converted to its numeric representation (which is 3) and `undefined` is 
converted to its numeric representation (which is NaN), and then subtraction is 
done. Doing subtraction with something that is NaN results in another NaN.

## Question 14
### Part A
```js
> '2' > 1
true
```
`2` is converted into its numeric representation (which is 2) and then the
comparison is done.

### Part B
```js
> '2' < '12'
false
```
The strings are compared lexicographically, and because `'1'` is before `'2'`, 
`'12'` is greater than `'2'`.

### Part C
```js
> 2 == '2'
true
```
The string `'2'` is converted to the number 2, and then the comparison is done.

### Part D
```js
> 2 === '2'
false
```
`===` checks equality without type conversion, and so 2 and `'2'` are not equal.

### Part E
```js
> true == 2
false
```
`true` is converted to its numeric value (which is 1) and then the comparison is 
done.

### Part F
```js
> true === Boolean(2)
true
```
2 is first converted to a boolean value by `Boolean()`, and because it's truthy
it becomes `true`. Then the comparison is done, and `true` equals `true`.

## Question 15
The `==` operator first does type conversions to ensure that the things it's
comparing are the same type. The `===` operator compares two things without
doing type conversions, so it will only return `true` if the two things have the
same type and the same value.

## Question 16
See `part2-question16.js`

## Question 17
The result will be the array `[2, 4, 6]`. Inside `modifyArray`, a for loop
iterates through each element of `array`, calls the `doSomething` function on 
each element (which multiplies them by 2), and then pushes the doubled element 
to a new array. Therefore, the input array of `[1, 2, 3]` will become 
`[2, 4, 6]`.

## Question 18
See `part2-question18.js`

## Question 19
The output will be 
```js
1
4
3
2
```
First, 1 is printed. Then 2 is scheduled to be printed in 1 second. Then 3 is
scheduled to be printed at the next event cycle. I'm not exactly sure why 4 is 
printed before 3—I looked it up and it didn't totally make sense to me. I think 
that the statements not in a `setTimeout` are all executed in the same event 
cycle, and so 3 is printed one cycle after 4. About a second after 1, 4, and 3 
have printed, 2 prints.