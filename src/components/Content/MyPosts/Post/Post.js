import React from 'react'
import Styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={Styles.item}>
            <img
                src='avatar1.png'
            />
            {props.message}
            <div>
                <span>Like : {props.like}</span>
            </div>

        </div>
    )
}

export default Post