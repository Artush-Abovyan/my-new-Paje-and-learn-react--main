let store = {
    _state: {
        postsData: {
            posts: [
                { id: 1, message: "Hi how are you?", like: 10 },
                { id: 2, message: "Im grate.What are you doing?", like: 1 }
            ],
            newPostText: ""
        },
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
        ]
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("STATE CHENGER");
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.postsData.newPostText,
            like: 0
        };
        this._state.postsData.posts.push(newPost);
        this._state.postsData.newPostText = ""
        this._callSubscriber(this._state)
        
    },
    updateNewPostText(newText) {
        this._state.postsData.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;

window.store = store;