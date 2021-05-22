//react uses elements to describe the UI of our app
// to create element - React.createElement
//react elements describe how page will look, but react-dom actually renders the elements to DOM

import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main'

// const tasks = ['task 1', 'task 2', 'task 3']

// const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li',{index}, task))) 
// to remove this tedious task, JSX was created, which lets us write html like syntax and renders it to the dom

//JSX
// const element = 
// <>
// <h1>Tasks List</h1>
// <ol>
//   {tasks.map((task, index) => <li key={index}>{task}</li>)}
// </ol>
// </>

// ReactDom.render(element, document.getElementById('root'))//root in public-> index.html

//react follows compositional model i.e. An app is made by Components(building blocks) and combined in a main component

//creating component styled app

//To dynamically add/remove components - state is used
//State represents the data which can be changed over time. It's immutable



ReactDom.render(<Main />, document.getElementById('root'))