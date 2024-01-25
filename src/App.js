import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Saitbar from './components/SaitBar/Saitbar';
import Content from './components/Content/Content';
import { Route, Routes } from 'react-router-dom';
import SingleDialog from './components/SingleDIalog/SingleDialog';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import { Toaster } from 'react-hot-toast';




function App() {
  return (
    <div className='app-wrapper'>
      <Toaster />
      <Header />
      <Saitbar />
      <Routes>
        <Route path='/dialogs/' element={<DialogsConteiner />} />
        {/* <Route path='/dialogs/:dialogId' element={<SingleDialog dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData} />} /> */}
        <Route path='/profile' element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
