import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext'
import toast from 'react-hot-toast';



const MyPostsConteiner = () => {
    return (
        <StoreContext.Consumer> 
            { store => {
                const addposttoast = ()=>{
                    toast.success("YOUR POST ADDED")
                }

                const state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreater(text)
                    store.dispatch(action);
                }
                return <MyPosts
                    addposttoast={addposttoast}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.postsData.posts}
                    newPostText={state.postsData.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsConteiner