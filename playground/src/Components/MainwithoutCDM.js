import React, {Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'

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



export default class Main extends Component{
  constructor(){
    //when we include <Main/> in index.js, this is called
    //here we are declaring state - to let react know, if we modify state(posts array here), reload the render menthod
    super(); //call Component's necessary functions
    //this refers to component instance main in index.js
    this.state = {
      posts : [{
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
    this.removePost = this.removePost.bind(this);
  }

  removePost(post){
    this.setState((state)=>({
      posts : state.posts.filter((postNumber)=> post.id !== postNumber.id)
    }))
  }

    render(){
      return(
        <>
            <Title title = "PhotoWall"/>
            {/* pass as props */}
            <Photowall posts={this.state.posts} onRemovePost={this.removePost}/>
        </>
      )
    }
  }