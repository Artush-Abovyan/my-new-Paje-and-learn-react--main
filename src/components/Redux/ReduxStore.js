import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


const reducers = combineReducers({
    postsData: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});


export const store = createStore(reducers)