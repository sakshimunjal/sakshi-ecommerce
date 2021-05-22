import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault(); //prevent default refresh on button click
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.caption.value
        const postJson = {
            id: Date.now(),
            imageLink : imageLink,
            description : description
        }
        if(imageLink && description){
            this.props.onAddPhoto(postJson)
        }
    }

    render(){
        return (
            <>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Caption" name="caption"/>
                        <button> Post </button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddPhoto