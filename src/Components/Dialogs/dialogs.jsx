<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../utils/validators'
import { Input } from '../common/FormControls/FormsControls'
import DialogItem from './dialogItem/dialogItem'
import Message from './dialogItem/message'
import style from './dialogs.module.scss'

const maxLenght = maxLenghtCreator(20)

<<<<<<< HEAD
const Dialogs = props => {
=======
let Dialogs = props => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  let state = props.state
  const onSubmit = values => {
    props.sendMessage(values.EnterMessege)
  }

<<<<<<< HEAD
  const dialogsElements = state.dialogsData.map(d => (
=======
  let dialogsElements = state.dialogsData.map(d => (
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
    <DialogItem name={d.name} key={d.id} />
  ))

  return (
    <div className={style.dialogs}>
      <div className={style.container}>
        <div className={style.dialogss}>
          <div className={style.dialogsItems}>{dialogsElements}</div>
          <MessageReduxForm state={props.state} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

const AddMessageForm = props => {
<<<<<<< HEAD
  const messagesElements = props.state.messages.map(m => (
=======
  let messagesElements = props.state.messages.map(m => (
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
    <Message message={m.message} key={m.id} />
  ))
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.messeges}>
        <div>
          <div>{messagesElements}</div>
          <Field
            name={'EnterMessege'}
            placeholder={'Enter your messege'}
            component={Input}
            validate={[required, maxLenght]}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({
  form: 'messedge',
})(AddMessageForm)

export default Dialogs
