# React Concepts

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
Event pooling in React is a performance optimization technique where SyntheticEvent objects are reused rather than created anew every time an event is triggered. This is designed to minimize memory usage and improve the performance of React applications, especially those with many event listeners.

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