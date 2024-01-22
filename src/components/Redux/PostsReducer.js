const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postseReducer = (state, action) => {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.postsData.newPostText,
                like: 0
            };
            this._state.postsData.posts.push(newPost);
            this._state.postsData.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.postsData.newPostText = action.newText;
            this._callSubscriber(this._state);
        } 
    
    return state;
}