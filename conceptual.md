### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Asynchrous code can be halted with the await function. Async functions can also be managed through functions like Promise.all()

- What is a Promise?

A Promise is a value that's giving in place of a function that hasn't resolved yet.

- What are the differences between an async function and a regular function?

An async function is multi threaded as opposed to the single threaded regular function. An async function means that multiple lines of code can execute at once.

- What is the difference between Node.js and Express.js?

Express is a web development framework. Node is the ecosystem in which express operates in.

- What is the error-first callback pattern?

Th error first callback pattern means that the first agument in a function will contain the error data if there is any.

- What is middleware?

Middleware is code that runs in the middle of the request / response cycle.

- What does the `next` function do?

The next function tells the express app to go to the next matching route or error handler.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

The requests don't execute asynchronously like it's intended to. Promise.all() would be a better solution.
