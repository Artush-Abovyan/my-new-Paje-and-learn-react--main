import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreater } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage
  }
}

let maqDispatchToProps = (dispatch) => {
  return {
    addposttoast: () => {
      toast.success("YOUR SMS HAS BEEN SENT")
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreater(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsConteiner = connect(mapStateToProps, maqDispatchToProps)(Dialogs);

export default DialogsConteiner