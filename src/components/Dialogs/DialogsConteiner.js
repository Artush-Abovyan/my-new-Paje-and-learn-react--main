import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreater } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import toast from 'react-hot-toast';

const DialogsConteiner = () => {


  return <StoreContext.Consumer> 
    { store => {
      let state = store.getState().dialogsPage;
      const addposttoast = ()=>{
        toast.success("YOUR SMS HAS BEEN SENT")
    }

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }

      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreater(body));
      }
      return <Dialogs
        addposttoast={addposttoast}
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsData={state} />
    }
  }
  </StoreContext.Consumer>

}

export default DialogsConteiner