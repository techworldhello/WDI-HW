# JS Errors Practice

First, clone down this repo.

In the spaces below, **write down what each error message means.** Try coming up with an answer on your own first, based solely on the error message. You can then use Google to confirm your answer.

If your answer needs some code context, feel free to provide an example code snippet in the spaces provided. This, however, is not required!

The prompts get progressively more difficult. If you get stuck, check the solution branch of this repo!

**Hint:** In a few of the spaces below, rather than just putting stuff inside the `<script>` tags you may need to edit the tags themselves.

### Bonus

Try generating these errors yourself! You can edit the `<script>` element of the enclosed [index.html](./index.html) as your scratch pad.

------------

1. `Uncaught SyntaxError: Unexpected token {`

  > Explanation goes here

  ```html
  <script>
  let array = {[]
  </script>
  ```
  There is a syntax error or unsymmetrical object syntax.

- `Uncaught ReferenceError: greeting is not defined`

  > Explanation goes here

  ```html
  <script>
  greeting.push([2, 3, 4])
  </script>
  ```
  The greeting variable was never declared.

- `GET file:///scripts.js net::ERR_FILE_NOT_FOUND`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```

  The HTML file could not find the scripts.js file to render.

- `GET http://maxcdn.com/bootstrap.css 400 (Not Found)`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  The css file cannot be found to render.

- `Uncaught TypeError: "hello".push is not a function`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  Array methods cannot be used on a string.

- `Uncaught TypeError: this.greet is not a function`

  > Explanation goes here

  ```html
  <script>
  this.greet()
  </script>
  ```
  Variables beginning with ```this.``` are instance variables and therefore not functions.

- `Uncaught TypeError: Cannot read property 'name' of undefined`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  A variable is undefined. Debugger should be used in this case to see what is defined and what isn't.

- `Uncaught SyntaxError: Unexpected token ILLEGAL`

  > Explanation goes here

  ```html
  <script>
  return `it's finally spring ;
  </script>
  ```
  When an ending quotation has been missed in a return or console.log statement.

- `Uncaught SyntaxError: missing ) after argument list`

  > Explanation goes here

  ```html
  <script>
  console.log("Today is: " Tuesday);
  </script>
  ```
  When a string was not escaped properly or when you need to log out 2 args however they are not separated by a comma nor a +.

- `Uncaught ReferenceError: Invalid left-hand side in assignment`

  > Explanation goes here

  ```html
  <script>
  if (weather = 'raining') {
    return true
  }

  //should be

  if (weather == 'raining') {
    return true
  }

  </script>
  ```
  When the a comparison operator is used incorrectly. 

- `Uncaught SyntaxError: Unexpected number`

  > Explanation goes here

  ```html
  <script>
  const fund = 20,000

  //should be

  const fund = 20000
  </script>
  ```
  When a number has been used or written incorrectly.

- `Uncaught SyntaxError: Unexpected string`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```

  When a string has been used or assigned incorrectly.

- `Uncaught SyntaxError: Unexpected identifier`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  When there is incorrect syntax during the assignment of a variable.

- `Uncaught SyntaxError: Unterminated template literal`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  When a temperate literal bracket was opened but not closed.

- `Uncaught RangeError: Maximum call stack size exceeded`

  > Explanation goes here

  ```html
  <script>
  // Optional code goes here
  </script>
  ```
  When a function has been called too many times, such as in an infinite loop or recursion with no stop condition.
