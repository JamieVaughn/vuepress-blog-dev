---
title: Simple State Reducer With Objects, Switch-Case & Generators
lang: en-US
date: 2019-12-28 20:47:18
excerpt: Let's build a super simple State Reducer in three different ways
type: post
blog: true
tags:
    - JavaScript
    - Functional
meta:
  - name: description
    content: Coding simple finite state machine manager/reducers in three ways
  - name: keywords
    content: state reducer state management finite state machines
---


Finite State Machines and State management is now an important part of frontend development. Libraries like Redux, XState and Microstates.js are creeping into wide spread use, especially in the React community. Those libraries provide a robust and complex solution to state management and are well suited to production applications. But for learning the concept of State Reducers and Finite State Management let's build a super simple __State Reducer__ in three different ways: 

* Object Hashmap
* Switch-Case statement
* Generator function

A state reducer takes in a state and an action and returns a new state in a deterministic fashion. Its referred to as a reducer because it reduces two inputs into a single state as an output. The deterministic part of this meshes nicely with Functional programming, because it means it can be expressed with pure functions. 

## Object Hashmap

```js
const stateReducer = {
    current: 'red',
    red: 'green',
    yellow: 'red',
    green: 'yellow',
    next: function(){
        this.current = this[this.current]
    },
    getState: function() {
        console.log(this.current)
    }
}

```

## Switch-Case Statement

```js
switch(action) {
    case 'red':
        state = 'green'
        break;
    case 'yellow':
        state = 'red'
        break;
    case 'green':
        state = 'yellow'
        break;
    default: 
        state = 'green'
        break;
}
```

## Generator Function

```js
function* stateReducer(state){
    let states = ['green', 'yellow', 'red']
    let nextState = (states.indexOf(state)+1)%3
    yield states[nextState]
}

stateReducer('green').next() // {value: "yellow", done: false}
```