import React from "react"
import Style from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={Style.message}>{props.message}</div>
}

export default Message