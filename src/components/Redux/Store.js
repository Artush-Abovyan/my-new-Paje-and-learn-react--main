import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.postsData = profileReducer(this._state.postsData, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;