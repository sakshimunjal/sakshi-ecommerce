import React, {Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto';

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


export default class Main extends Component{
  constructor(){
    //when we include <Main/> in index.js, this is called
    //here we are declaring state - to let react know, if we modify state(posts array here), reload the render menthod
    super(); //call Component's necessary functions
    //this refers to component instance main in index.js
    this.state = {
      posts : [],
      screen : "photos" //photos/addPhotos - don't use it bcz url and ui are not in sync, user can't go back by clicking back on browser, hence react routers used
    }
    this.removePost = this.removePost.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateScreen = this.updateScreen.bind(this)
  }

  removePost(post){
    this.setState((state)=>({
      posts : state.posts.filter((postNumber)=> post.id !== postNumber.id)
    }))
  }

  updateScreen(){
    this.setState({
      screen : "addPhotos"
    })
  }

  componentDidMount(){
    let data = stimulateDBCall();
    this.setState({
      posts : data
    })
  }

  componentDidUpdate(prevProps, prevState){
  }

    render(){
      return(
        <>
          {
            this.state.screen === "photos" && (           
             <div>
                <Title title = "PhotoWall"/>
                {/* pass as props */}
                <Photowall posts={this.state.posts} onRemovePost={this.removePost} updateScreen={this.updateScreen}/>
              </div>
            )
          }
          {
            this.state.screen === "addPhotos" && (<div>
              <AddPhoto/>
            </div>)
          }
            
        </>
      )
    }
  }

  function stimulateDBCall(){
    return [{
      id: "0",
      description: "beautiful landscape",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
      }, {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
      }, {
      id: "2",
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }]
  }