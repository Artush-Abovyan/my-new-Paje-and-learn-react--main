import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Saitbar from './components/SaitBar/Saitbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import SingleDialog from './components/SingleDIalog/SingleDialog';


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Saitbar />
      <Routes>
        <Route path='/dialogs/' element={<Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />} />
        <Route path='/dialogs/:dialogId' element={<SingleDialog dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />} />
        <Route path='/profile'
          element={<Content
            postsData={props.state.postsData}
            dispatch={props.dispatch}
          />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
