const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
} 

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessgeBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessgeBody;
            state.newMessgeBody = '';
            state.messagesData.push({id: 5, message: body});
            return state
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;