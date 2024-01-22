
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        postsData: {
            posts: [
                { id: 1, message: "Hi how are you?", like: 10 },
                { id: 2, message: "Im grate.What are you doing?", like: 1 }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "DImych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is you" },
                { id: 3, message: "you" },
            ],
            newMessgeBody: ""
        },
        sidebar: {}

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("STATE CHENGER");
    },
    dispatch(action) {
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
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessgeBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessgeBody;
            this._state.dialogsPage.newMessgeBody = '';
            this._state.dialogsPage.messagesData.push({id: 5, message: body})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;

window.store = store;