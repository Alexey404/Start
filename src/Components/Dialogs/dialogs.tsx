import { Field, reduxForm } from 'redux-form'
import { maxLenghtCreator, required } from '../../utils/validators'
import { Input } from '../common/FormControls/FormsControls'
import DialogItem from './dialogItem/dialogItem'
import Message from './dialogItem/message'
import style from './dialogs.module.scss'

const maxLenght = maxLenghtCreator(20)

type Props = {
  state: any
  sendMessage(EnterMessege: any): void
}

const Dialogs: React.FC<Props> = props => {
  const state = props.state
  const onSubmit = (values: any) => {
    props.sendMessage(values.EnterMessege)
  }

  const dialogsElements = state.dialogsData.map((d: any) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
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

type LoginFrmValue = {
  EnterMessege: string
}

type IProps = {
  state: any
}

const AddMessageForm = (props: any) => {
  const messagesElements = props.state.messages.map((m: any) => (
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

const MessageReduxForm = reduxForm<LoginFrmValue, IProps>({
  form: 'messedge',
})(AddMessageForm)

export default Dialogs
