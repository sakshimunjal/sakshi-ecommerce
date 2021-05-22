import React, {Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
// import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'

// export default function Main(){
//   return <>
//              <Title title = "PhotoWall"/>
//              {/* pass as props */}
//              <Photowall posts={posts}/>
//          </>
// }

//Lifecycle -
// 1. constructor - called before the component is mounted. To be used only to initialize state, bind
// 2. render - only responsible for UI rendering based on props and state. never call any ajax requests
// 3. If we want to load data from database, this should be done after the component is mounted. - **ComponentDidMount*** - invoked immediately after Component is inserted in the DOM
// 4. ComponentWillMount - before component is mounted
// 5. ComponentDidUpdate - whenever component is re-rendered i.e. whenever we update state to trigger re-render

// Lifecycle Methods List
// Here's a list of some common lifecycle methods used in React. 

// quick definition before we start with the methods:

//  side-effect: modifying the state of something else outside of its scope. We'll consider asynchronous calls a side effect, because they will change the state in some way. 

// The following methods are called when a component is being added to the DOM:

// constructor() : called before component is mounted. NEVER put side effect code inside of the constructor. Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods. 
// componentWillMount(): invoked immediately before mounting occurs. Called before render. Once again, DO NOT put any side effect code inside of componentWillMount, and do not make API calls in this method  
// render(): never fetch data inside of render. Should only be used to return elements.
// componentDidMount(): Perfect place to fetch data. It gets called after render. This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render. This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
// The following methods are called when a component is re-rendered to the DOM

// componentDidUpdate(): called when the state of a component changes. Perfect place to update UI or make network calls based on previous state before update, and current state


// React router 3 components - browser router (keep track of url changes), link(invoke change in url onclick) and route(path based on url)
// whatever url we are directed to by link component, find the route which has path associated with the link, the path has its own ui


export default class Main extends Component{
  constructor(){
    //when we include <Main/> in index.js, this is called
    //here we are declaring state - to let react know, if we modify state(posts array here), reload the render menthod
    super(); //call Component's necessary functions
    //this refers to component instance main in index.js
    this.state = {
      posts : [],
      // screen : "photos" //photos/addPhotos - don't use it bcz url and ui are not in sync, user can't go back by clicking back on browser, hence react routers used
    }
    // this.removePost = this.removePost.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.updateScreen = this.updateScreen.bind(this)
  }

    render(){
      return(
        <>
          <Route exact path="/" render={()=>( //exact tells the router to show only if '/' ,not /anything', if exact not written it checks includes
            <div>
              <Title title = "PhotoWall"/>
              <Photowall posts={this.props.posts}/>
              {/* pass as props */}
              {/* <Photowall posts={this.state.posts} onRemovePost={this.removePost} /> */}
            </div>
          )      
          }/>
          
          {/* <Route path="/AddPhoto" render={({history})=>(
              <AddPhoto onAddPhoto={(addedPost)=>{
                console.log(addedPost)
                this.addPhoto(addedPost);
                history.push('/')
              }}/>
          )}  */}
          />        
          
          {/* <Route path="/AddPhoto" component={AddPhoto}/> */}
        </>
      )
    }
  }
