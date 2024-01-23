import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsData;

  let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = state.messagesData.map(mess => <Message message={mess.message}/>);
  let newMessgeBody = state.newMessgeBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  }

  return (
    <div className={Style.content}>
      <div className={Style.dialogsItems}>
        {dialogsElements}
        </div>
      <div className={Style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessgeBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>SEND</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs