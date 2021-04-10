import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../Redux/dilogs-reducer";
import Dialogs from "./dialogs";

let mapStateToProps = (state) => {
  return { state: state.dialogsPage };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
