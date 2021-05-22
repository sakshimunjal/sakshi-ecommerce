import React from 'react';
import ReactDom from 'react-dom';
// import Main from './Components/Main';
import './styles/styleSheet.css'
import {BrowserRouter} from 'react-router-dom'

import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'

const store = createStore(rootReducer)

//connect broswer router to a link component, when link is pressed, it tells browser to update the url, helping our app listen for ui changes

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))