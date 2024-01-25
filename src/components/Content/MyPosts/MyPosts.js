import React from 'react';
import Styles from './MyPosts.module.css';
import Post from './Post/Post';
import ContentLoader from 'react-content-loader';


const MyPosts = (props) => {
    let postsElemets = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)
    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addposttoast()
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return <div className={Styles.content}>
        <ContentLoader
            speed={3}
            width={250}
            height={40}
            viewBox="0 0 300 40"
            backgroundColor="red"
            foregroundColor="yellow"
        >
            <rect x='20' y='15' rx='4' ry='14' width='150' height='16.4' />
        </ContentLoader>
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
                <button onClick={onAddPost}>Add Post</button>
            </div>
        </div>
        <div>
            {postsElemets}
        </div>
    </div>
}

export default MyPosts