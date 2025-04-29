## Question 1
Line 9 will print `values added: 20`

## Question 2
Line 13 will print `final result:  20`

## Question 3
You shouldn't use var hoists the variable declaration to the top of the 
function, which can create scope/naming conflicts. It's also confusing because 
most programming languages (that I've used at least) use block scope, and so
using a variable that's function-scoped will likely have unintended behavior.

## Question 4
Line 9 will print `values added: 20`

## Question 5
The code returns an error, because `result` is not declared in the same scope as 
the `console.log`. `let` creates variables with block scope, and so `result` is
destroyed after line 11, meaning line 13 references a variable that doesn't 
exist.

## Question 6
The code errors before line 9. On line 7, we try to reassign the value of 
`result`, which is a `const` and can't be reassigned.

## Question 7
The code errors before line 13. On line 7, we try to reassign the value of 
`result`, which is a `const` and can't be reassigned.