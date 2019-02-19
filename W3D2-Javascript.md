# Client side javascript

## Global Vars

* They can be used anywhere. They are global.
* We shouldn't be creating them.

`var` scope is a function.
`const` and `let` are scoped to blocks.


* [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
  - in the browser, window is **the** global object
  - every time we create a global variable, it gets attached to the global object as a property
  - represents the current open window (tab)
* [navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
  - the entire browser application
  - can be used to access hardware
* [document](https://developer.mozilla.org/en-US/docs/Web/API/document)
  - all of the html
  - our entry point to the **DOM**

## HTML & the DOM

Document Object Model

```js
{
  tagName: 'body',
  data: ...,
  children: [
    {
      tagName: 'h1',
      data: ...,
      children: []
    },
    {
      tagName: 'article',
      data: ...,
      children: [
        {
          tagName: 'ul'
          data: ...
          children: [...]
        }
      ]
    }
  ]
}
```

### Traversal

```js
document.body.children[2].children[1].children[whatever index you want in li]
```

### Selection

```js
document.getElementById();
document.getElementsByClass();

document.querySelector('img');
document.querySelectorAll();
```

### Manipulation

---

## Including Javascript Files

## Events

* page loading
* on click anything
* on hover anything
* key down 
* mouse stuff

### Creation

```js
document.createElement()
```

## Debugger
