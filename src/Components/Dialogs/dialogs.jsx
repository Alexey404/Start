import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../utils/validators'
import { Input } from '../common/FormControls/FormsControls'
import DialogItem from './dialogItem/dialogItem'
import Message from './dialogItem/message'
import style from './dialogs.module.scss'

const maxLenght = maxLenghtCreator(20)

const Dialogs = props => {
  let state = props.state
  const onSubmit = values => {
    props.sendMessage(values.EnterMessege)
  }

  const dialogsElements = state.dialogsData.map(d => (
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
  const messagesElements = props.state.messages.map(m => (
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
