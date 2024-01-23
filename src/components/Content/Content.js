import React from 'react'
import Styles from './Content.module.css'
import MyPostsConteiner from './MyPosts/MyPostsConteiner'

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
        <MyPostsConteiner
            store={props.store}
            
        />

    </div>
}

export default Content