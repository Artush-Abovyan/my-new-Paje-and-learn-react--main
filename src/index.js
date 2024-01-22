import { store } from './components/Redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
      root.render(
            <BrowserRouter>
                  <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>
      );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
      let state = store.getState()
      rerenderEntireTree(state);
});




