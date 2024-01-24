import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreater } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsConteiner = () => {


  return <StoreContext.Consumer> 
    { store => {
      let state = store.getState().dialogsPage;
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }

      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreater(body));
      }
      return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsData={state} />
    }
  }
  </StoreContext.Consumer>

}

export default DialogsConteiner