# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I made the code more clean and readable by moving the logic for checking if the candidate is a string up to where the candidate is assigned. This way, the reader has the complete information without having to scroll up and down. The "else" block for an empty input is also attached to the end of this statement. Now all logic for defining the candidate is together. The last thing that happns is the length check. This is a more logical and easy to understand order. I also considered using more ternary operators, but with the multiple conditions, if/else is more clean and readable in my opinion.
