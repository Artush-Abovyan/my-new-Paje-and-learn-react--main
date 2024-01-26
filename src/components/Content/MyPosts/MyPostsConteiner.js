import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return {
        posts:state.postsData.posts,
        newPostText:state.postsData.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addposttoast:() => {
            toast.success("YOUR POST ADDED")
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsConteiner= connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner