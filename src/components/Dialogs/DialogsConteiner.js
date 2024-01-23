import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreater } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsConteiner = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreater(body));
  }

  return  <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsData={state}/>
}

export default DialogsConteiner