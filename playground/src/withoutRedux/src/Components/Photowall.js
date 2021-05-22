import React/*, {Component}*/ from 'react';
import {Link} from 'react-router-dom'
import Photo from './Photo'
import PropTypes from 'prop-types'
// import AddPhoto from './AddPhoto'

//functional Component - stateless
export default function Photowall(props){
    return (<>
            <Link className='add-icon' to="/AddPhoto"></Link>
            {/* <a className='add-icon' onClick={props.updateScreen} href="#AddPhoto"></a> */}
            {/* a tag to add href ie base url/#AddPhoto */}
            {/* <button className="add-icon" onClick={props.updateScreen}></button> */}
            <div className='photo-grid'>
                {props.posts
                .sort((x,y)=>y.id-x.id)
                .map((post, index) =><Photo key={index} post={post} onRemovePost={props.onRemovePost}/>)}
           </div>
           </>)
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePost: PropTypes.func.isRequired
}


// export default class Photowall extends Component{
//     render(){
//         return(
//             <div className='photo-grid'>
//                 {this.props.posts.map((post, index) =><Photo key={index} post={post}/>)}
//             </div>
//         )
//     }
// }