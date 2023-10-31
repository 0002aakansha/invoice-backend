# React

- reactjs interview questions repo
  - https://github.com/sudheerj/reactjs-interview-questions
- Reconciliation algo & virtual DOM
  - https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40
  - https://blog.logrocket.com/virtual-dom-react/#concept-review-what-is-dom
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

#### useState() async behaviour

> React does not immediately update the state or re-render the component. Instead, React will batch state updates and perform them before the next render. This batching of state updates is an optimization to avoid unnecessary re-renders and improve performance.

> Here's the typical sequence of events when you call setState in a functional component:

> You call setState, which schedules a state update.
> React continues to execute the current function and any subsequent code.
> Before the next render, React will apply the scheduled state updates in a batch.
> The component re-renders with the updated state.
> Your component function is called again with the new state, and the updated content is displayed in the UI.
> This asynchronous and batched behavior is important to understand when working with React's functional components. It allows React to optimize the rendering process and avoid unnecessary rendering cycles. However, it also means that you should be mindful of how you use the state and consider the timing of state updates, especially when the new state depends on the previous state.

> If you need to perform actions after a state update is applied, you can use the useEffect hook. By placing code inside a useEffect callback, you can ensure that it runs after the component has rendered with the updated state.

- lifting state up
  - https://medium.com/@kristinethejohnson/lifting-state-up-prop-drilling-in-react-3ef3367fca7a
- higher-order components (HOC)
  - https://blog.logrocket.com/understanding-react-higher-order-components/
  - https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
- pure components
  - https://blog.logrocket.com/what-are-react-pure-functional-components/#:~:text=A%20React%20component%20is%20considered,are%20treated%20as%20pure%20components.
- useEffect Hook
  - https://blog.logrocket.com/useeffect-react-hook-complete-guide/
- React.memo() => take two arguments(2nd is optional)

  - first >> component
  - second >> arePropsEqual()
  - memo() performs shallow equality check

    > React's React.memo utilizes a shallow equality check to determine whether a memoized functional component should re-render. This shallow equality check involves comparing the previous props to the current props using the Object.is method, which is similar to === for most cases but treats -0 and +0 as equal and treats NaN as not equal to itself.

    > The default behavior of React.memo compares each prop and its value individually using Object.is. If all props are equal (according to Object.is), the component does not re-render.

    ```
        <MyComponent name="Alice" age={25} />
        <MyComponent name="Alice" age={26} />
    ```

    > The shallow equality check compares the previous props and the current props and recognizes that the name prop is still "Alice," but the age prop has changed from 25 to 26. As a result, the component will re-render because at least one prop has changed.

    > It's important to note that this shallow comparison checks only the top-level properties of the props. If your component's props include nested objects or arrays, changes within those nested structures might not trigger re-renders unless you provide a custom arePropsEqual function to React.memo. Customizing the equality check allows you to control which changes should cause re-renders based on your specific requirements.

    > The arePropsEqual function is an optional argument that you can pass to React.memo to provide custom control over how props equality is determined.

    > If you provide the arePropsEqual function, it replaces the default shallow equality check. This can be useful when you need more control over when a component should or should not re-render.

    > The arePropsEqual function receives two sets of props as arguments: the previous props and the current props. It should return true if the two sets of props are considered equal and false if they are not. If the function returns true, the component won't re-render; if it returns false, the component will re-render.

    ````
        import React from "react";
        ```

        function MyComponent(props) {
        // Component logic
        }

        function arePropsEqual(prevProps, nextProps) {
        // Custom logic to determine if props are equal
        return prevProps.id === nextProps.id;
        }

        export default React.memo(MyComponent, arePropsEqual);

    ````

    > In this example, the arePropsEqual function checks if the id prop has changed. If the id prop remains the same between renders, the component won't re-render. If it changes, the component will re-render.

    > Customizing the equality check with arePropsEqual can be useful when you have complex or nested props and want to optimize the re-rendering behavior of your memoized component. However, in many cases, the default shallow comparison of props provided by React.memo is sufficient, and you may not need to provide a custom arePropsEqual function.
