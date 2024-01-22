const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        { id: 1, message: "Hi how are you?", like: 10 },
        { id: 2, message: "Im grate.What are you doing?", like: 1 }
    ],
    newPostText: ""
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state;    
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;