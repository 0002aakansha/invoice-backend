# JS

- interpeted vs compiled language
  - https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/
- static vs dynamic(loosely typed) language
  - https://www.bairesdev.com/blog/static-vs-dynamic-typing/
- js-questions-repo
  - https://github.com/albseb511/fsd/blob/master/javascript.md
- async javascript visualizers
  - https://pythontutor.com/render.html#mode=display
  - https://ui.dev/javascript-visualizer
  - http://latentflip.com/loupe/?code=YSA9IDUKY29uc29sZS5sb2coYSkKbGV0IGEgPSAy!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
  - https://www.jsv9000.app/
- object methods
  - object.freeze()
  - object.seal()
  - object.is()
- ES6 features
  https://www.geeksforgeeks.org/introduction-to-es6/
- promise

  - https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
  - https://blog.logrocket.com/guide-promises-node-js/
    > In JavaScript, the then() method in a Promise returns a new Promise.
    > Promise.race and Promise.any do different things:

  > Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.

  > Promise.any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.

  > The chief differences are:

  > - race's promise is rejected when the first promise you give it is rejected; any's promise isn't, because another promise may be fulfilled instead.

  > - any's promise's rejection reason will be an AggregateError, but race's rejection reason will be the rejection reason from the first promise that was rejected

  > So if you pass them both an array of two promises, and one of the promises is rejected, then afterward the other promise is fulfilled, the promise from Promise.race will be rejected (because the first promise to settle was rejected) and the promise from Promise.any will be fulfilled (because although the first promise was rejected, the second was fulfilled).

  ```
    +−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
    | name                |                description
    +−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
    | Promise.allSettled  | does not short-circuit
    | Promise.all         | short-circuits when an input value is rejected
    | Promise.race        | short-circuits when an input value is settled
    | Promise.any         | short-circuits when an input value is fulfilled
    +−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
  ```

- undefined & null
  - https://blog.greenroots.info/javascript-undefined-and-null-lets-talk-about-it-one-last-time
