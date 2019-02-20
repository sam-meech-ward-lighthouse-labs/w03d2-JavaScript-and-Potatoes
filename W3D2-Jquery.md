# jQuery 

## `$`and jQuery

## 4 things you pass to the query function


* css selector
* another function
* native DOM node
* tag name


### A function: 

```js
$(() => {
  
  // will only get executed when the entire DOM is loaded and ready
  // DOMContentLoaded event

  // put all of your code inside this function,.
  // so nothing gets executed before the DOM loads.
  // no more global scope

  var hi = 'hello';

});
```

### A CSS Selector:

```js
$('li').text("kittens")
```

### An HTML tag:

```js
const item = $('<li>');
item.text('hot');
item.appendTo('#potatoList');
```

### A native dom element:

```js
document.querySelector("#page-heading");
$(heading)
```

## Chaining

## Event Handling & Delegation

## Plugins

