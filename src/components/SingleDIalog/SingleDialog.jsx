import React from 'react';
import Style from './../Dialogs/Dialogs.module.css';
import DialogItem from './../Dialogs/Dialogitem/Dialogitem';
import Message from './../Dialogs/Message/Message';

const SingleDialog = (props) => {

 

  let dialogsElements = props.dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.messagesData.map(mess => <Message message={mess.message}/>)
  
  return (
    <div className={Style.content}>
      <div className={Style.dialogsItems}>
        {dialogsElements}
        </div>
      <div className={Style.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default SingleDialog