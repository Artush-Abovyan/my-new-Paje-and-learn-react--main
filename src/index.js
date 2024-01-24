import { store } from './components/Redux/ReduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
      root.render(
            <BrowserRouter>
                  <StoreContext.Provider value={store}>
                        <App />
                  </StoreContext.Provider>
            </BrowserRouter>
      );
}
rerenderEntireTree();
store.subscribe(() => {
      rerenderEntireTree();
});




