# pass-message

pass-message (or p-m for short) is a web component that can attach a listener to a neighboring DOM element, and invoke methods on its containing host web component, or other DOM elements up the DOM tree, when the event fires.

pass-message is one of a number of web components that comprise the [https://github.com/bahrus/p-et-alia] framework of web components.

## Example Syntax

```html
<button disabled part=expander class="expander nonPrimitive" -text-content></button>
<p-m on=click to-host prop=toggleOpen val=target.textContent></p-m>
```

"prop" is the name of the method or arrow function property attached to the Custom Element container.

