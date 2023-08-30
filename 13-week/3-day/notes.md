A CSS selector applies styles to a specific DOM element or elements. A selector can be any of the following basic types:

- Type selectors -- matches elements by node name (e.g. div, li, a, p)
- Class selectors -- matches elements by class name (e.g. <button class=“active”>)
ID selectors -- matches elements by ID name (e.g. <div id=”list-1”>)
- Universal selectors -- matches elements of any type (e.g. *)
- Attribute selectors -- matches elements based on the presence or value of a given attribute (e.g. a[title] matches all a elements with a title attribute)


```css
/* Type selector */
div {
  background-color: #000000;
}

/* Class selector */
.active {
  color: #ffffff;
}

/* ID selector */
#list-1 {
  border: 1px solid gray;
}

/* Universal selector */
* {
  padding: 10px;
}

/* Attribute selector */
a[title] {
  font-size: 2em;
}
```