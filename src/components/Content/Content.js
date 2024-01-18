import React from 'react'
import Styles from './Content.module.css'
import MyPosts from './MyPosts/MyPosts'

const Content = (props) => {
    

    return <div className={Styles.content}>
        <div>
            <img className={Styles.img} src='imeg1.png' /></div>
        <div className={Styles.description}>
            <img
                className={Styles.avatar}
                src='avatar1.png'
            />
            <div>
                <h3>Artush A.</h3>
            </div>
        </div>
        <MyPosts 
            postsData={props.postsData.posts} 
            newPostText ={props.postsData.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
        />
        
    </div>
}

export default Content