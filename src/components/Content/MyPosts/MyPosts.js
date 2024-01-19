import React from 'react'
import Styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElemets = props.postsData.map(p => <Post key={p.id} message={p.message} like={p.like} />)
    
    let newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
        
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }
    
    return <div className={Styles.content}>
        <h2>My posts</h2>
        <div>
            <div>
            <label>
                <textarea
                     onChange={onPostChange} 
                     ref={newPostElement} 
                     value={props.newPostText}
                     placeholder="What's on your mind?"
                />
            </label>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
        <div>
            {postsElemets}
        </div>
    </div>
}

export default MyPosts