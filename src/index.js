import { store } from './components/Redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
      root.render(
            <BrowserRouter>
                  <Provider store={store}>
                        <App />
                  </Provider>
            </BrowserRouter>
      );
}
rerenderEntireTree();
store.subscribe(() => {
      rerenderEntireTree();
});




