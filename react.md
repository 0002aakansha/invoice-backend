# React

- reactjs interview questions repo
  - https://github.com/sudheerj/reactjs-interview-questions
- lifecycle in class-components & functional-components
  - class component
    - https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
  - functional component
    - https://tsh.io/blog/react-component-lifecycle-methods-vs-hooks/
- error boundaries
  - class-component
    - getDerivedStateFromError()
    - componentDidCatch()
  - functional-component
    - react-error-boundary
  - useErrorHandler()
  - https://blog.logrocket.com/react-error-handling-with-react-error-boundary/
- lazy loading and suspence for performance optimization
  - lazy() and suspence() method
  - https://retool.com/blog/react-lazy-loading-and-performance
- webpacks in react
  - https://www.scaler.com/topics/react/webpack-in-react/
- custom react hooks
  - https://blog.logrocket.com/create-your-own-custom-react-hooks/
- useDeferrValue() Hook
  - https://blog.webdevsimplified.com/2022-05/use-deferred-value/
- Memoization in React
  - https://www.sitepoint.com/implement-memoization-in-react-to-improve-performance/
- Batching in react
  - https://itnext.io/use-automatic-batching-in-react-to-optimize-state-updates-4829f1156b2f
    - https://www.andreadiotallevi.com/blog/how-to-handle-multiple-set-state-calls-on-the-same-object-in-react

### useState() async behaviour

> React does not immediately update the state or re-render the component. Instead, React will batch state updates and perform them before the next render. This batching of state updates is an optimization to avoid unnecessary re-renders and improve performance.

> Here's the typical sequence of events when you call setState in a functional component:

> You call setState, which schedules a state update.
> React continues to execute the current function and any subsequent code.
> Before the next render, React will apply the scheduled state updates in a batch.
> The component re-renders with the updated state.
> Your component function is called again with the new state, and the updated content is displayed in the UI.
> This asynchronous and batched behavior is important to understand when working with React's functional components. It allows React to optimize the rendering process and avoid unnecessary rendering cycles. However, it also means that you should be mindful of how you use the state and consider the timing of state updates, especially when the new state depends on the previous state.

> If you need to perform actions after a state update is applied, you can use the useEffect hook. By placing code inside a useEffect callback, you can ensure that it runs after the component has rendered with the updated state.
