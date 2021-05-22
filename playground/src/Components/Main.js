import React, {Component} from 'react';
import List from './List'
import Title from './Title'

export default class Main extends Component{
    render(){
      return(
        <>
          <Title title = "To Do"/>
          <List tasks = {['task 1', 'task 2', 'task 3']}/>
          <List tasks = {['task 5', 'task 6']}/> 
          {/* pass as props */}
        </>
      )
    }
  }