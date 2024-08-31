# React Concepts

Table of contents
1. Synthetic Events in React
2. Event Pooling in React
3. Reconciliation in React

## 01 - Synthetic Events in React
- SyntheticEvent is a cross-browser wrapper around the browser's native event system.
- It is part of React's event handling system, providing a consistent interface across different browsers.
- React's SyntheticEvent objects are created when an event is triggered in a React component, such as a 'click', 'keydown', or 'change' event.

### Key Aspects of SyntheticEvent
1.  Cross-Browser Compatibility: React abstracts away the differences in event handling across different browsers by using SyntheticEvent. This ensures that the event object behaves the same way in all environments.
2.  Event Pooling: React uses event pooling to improve performance. When an event is triggered, the SyntheticEvent object is reused for multiple events, which reduces memory allocation. Because of this, properties of the SyntheticEvent object are nullified after the event handler has been called. If you need to access the event properties asynchronously (e.g., in a callback), you should call event.persist() to remove the event from the pool.
3.  Event Properties: SyntheticEvent contains the same properties as the native event object, such as target, type, currentTarget, preventDefault(), stopPropagation(), etc.
4.  Custom Events: You can create custom events that work with React's event system, leveraging SyntheticEvent for consistent behavior.


## 02 - Event Pooling in React
Event pooling in React is a performance optimization technique where SyntheticEvent objects are reused rather than created a new every time an event is triggered. This is designed to minimize memory usage and improve the performance of React applications, especially those with many event listeners.

### How Event Pooling Works
1. Event Creation: When an event occurs (e.g., a click, change, or keypress), React creates a SyntheticEvent object that wraps the native browser event. This SyntheticEvent is then passed to the event handler function you’ve defined in your component.

2. Event Usage: Within your event handler, you can access various properties of the SyntheticEvent, such as event.target, event.type, event.preventDefault(), etc. These properties are similar to those found in the native event object, but with cross-browser consistency.

3. Event Pooling: After the event handler has finished executing, React nullifies all properties of the SyntheticEvent object. This means that the SyntheticEvent is "pooled" or recycled, making it available for the next event. Because of this, if you try to access any properties of the event after the handler has finished executing, you'll find that they have been set to null.

4. Why Pooling? Pooling reduces the number of objects that need to be created and garbage collected, thereby improving performance, especially in applications with many events or frequent updates.


### Handling Event Pooling in Code
Due to pooling, if you need to access the event object asynchronously (e.g., in a callback or after an asynchronous operation), you'll need to call event.persist() to prevent React from pooling the event. This will prevent React from nullifying the event's properties, allowing you to access them later.

- Example Without 'persist()'
```js
function handleClick(event) {
  setTimeout(() => {
    console.log(event.target); // This will log `null` because the event is pooled
  }, 1000);
}
```

- Example With 'persist()'
```js
function handleClick(event) {
  event.persist(); // Prevents the event from being pooled
  setTimeout(() => {
    console.log(event.target); // This will log the correct target element
  }, 1000);
}

```

### When to Use event.persist()
You should use event.persist() sparingly, as it disables the performance benefits of event pooling. It’s only necessary when you need to keep a reference to the event object for use outside the immediate event handler scope, such as in asynchronous operations.

### Summary
- Event pooling: React recycles SyntheticEvent objects to improve performance.
- After event handler execution: The properties of the SyntheticEvent are nullified.
- Use event.persist(): If you need to access the event object after the handler has finished, prevent pooling by calling event.persist().
This mechanism helps React applications run efficiently, especially when dealing with a high number of events.


## 03 - Reconciliation in React

###  Reconciliation 
Reconciliation is the process through which React updates the DOM to match the state of the application. When the state of a component changes, React needs to figure out how to efficiently update the UI to reflect the new state. This is where reconciliation comes in.

### Key Concepts of Reconciliation in React:
- Virtual DOM: React maintains a lightweight copy of the actual DOM, known as the Virtual DOM. When a component's state or props change, React updates the Virtual DOM first. This is much faster than updating the actual DOM directly.

- Diffing Algorithm: React uses a highly efficient diffing algorithm to compare the current Virtual DOM tree with the previous one. This process is known as the diffing phase. React identifies what has changed by comparing the new Virtual DOM with the old one, down to the individual nodes.

- Patch Process: After identifying the changes, React applies only the necessary updates to the real DOM. This process is called reconciliation. Instead of re-rendering the entire DOM, React selectively updates only the parts that have changed. This minimizes the amount of work the browser has to do, which improves performance.

- Keys: In lists, React uses keys to identify which items have changed, been added, or removed. Keys help React make these updates more efficiently during reconciliation by providing a stable identity for each item in a list. This way, React can match the Virtual DOM nodes correctly and perform minimal DOM manipulation.

- Batched Updates: React batches multiple state updates into a single re-render to improve performance. This means that instead of re-rendering a component every time a state change occurs, React can group multiple updates together and reconcile the changes in one go.

### How Reconciliation Works:
Render Phase: When a component's state or props change, React triggers a render. This results in a new Virtual DOM tree.

Diffing Phase: React compares the new Virtual DOM tree with the previous one. It calculates the differences (or "diffs") between the two.

Commit Phase: React updates the actual DOM with only the parts that have changed. This involves adding, removing, or updating elements and attributes based on the differences found in the diffing phase.

#### Example:
Imagine you have a component that renders a list of items. If you add a new item to the list, React doesn't re-render the entire list in the actual DOM. Instead, it:

Updates the Virtual DOM to include the new item.
Compares the new Virtual DOM with the previous version.
Identifies that only the list needs to be updated.
Updates the real DOM to add just the new item, leaving the rest of the list untouched.


#### Conclusion:
Reconciliation is a core concept in React that optimizes updates to the DOM. By maintaining a Virtual DOM and using a diffing algorithm, React ensures that it performs the minimal necessary changes to the actual DOM, leading to more efficient and faster updates. This is one of the reasons React is known for its performance, especially in applications with complex user interfaces.

