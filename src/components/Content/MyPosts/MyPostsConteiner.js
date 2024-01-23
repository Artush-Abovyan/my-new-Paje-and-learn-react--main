import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsConteiner = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text)
        props.store.dispatch(action);
    }

    return (<MyPosts 
        updateNewPostText={onPostChange} 
        addPost={addPost} 
        posts={state.postsData.posts} 
        newPostText={state.postsData.newPostText}/>)
}

export default MyPostsConteiner