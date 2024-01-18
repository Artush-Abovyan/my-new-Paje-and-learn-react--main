
import store from './components/Redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
      root.render(
            <BrowserRouter>
                  <App state={store.getState()} addPost={store.addPost.bind(store)}  updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
      );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);




