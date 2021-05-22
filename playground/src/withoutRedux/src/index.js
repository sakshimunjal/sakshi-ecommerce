import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './styles/styleSheet.css'
import {BrowserRouter} from 'react-router-dom'

//connect broswer router to a link component, when link is pressed, it tells browser to update the url, helping our app listen for ui changes

ReactDom.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'))