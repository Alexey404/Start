import React from "react";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./dialogItem/message";
import style from "./dialogs.module.scss";

let Dialogs = (props) => {
  let state = props.state;

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} key={d.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.container}>
        <div className={style.dialogss}>  
          <div className={style.dialogsItems}>{dialogsElements}</div>
          <div className={style.messeges}>
            <div>
              <div>{messagesElements}</div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your messege"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
