import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../Redux/redux-store'
import DialogItem from './dialogItem/dialogItem'
import Message from './dialogItem/message'
import style from './dialogs.module.scss'

const Dialogs: React.FC = () => {
  const { dialogsData } = useSelector(
    (state: AppStateType) => state.dialogsPage
  )

  const dialogsElements = dialogsData.map((d: any, index: number) => (
    <DialogItem name={d.name} key={index} id={d.id} />
  ))

  return (
    <div className={style.dialogs}>
      <div className={style.container}>
        <div className={style.dialogss}>
          <div className={style.dialogsItems}>{dialogsElements}</div>
          <AddMessageForm />
        </div>
      </div>
    </div>
  )
}

const AddMessageForm = () => {
  const { messages } = useSelector((state: AppStateType) => state.dialogsPage)
  const dispatch = useDispatch()

  const onSubmit = (values: any) => {
    console.log(values)
    dispatch({ type: 'SEND_MESSAGE', body: values.EnterMessege })
  }

  const messagesElements = messages.map((m: any, index: number) => (
    <Message message={m.message} key={index} />
  ))
  return (
    <Formik initialValues={{ EnterMessege: '' }} onSubmit={onSubmit}>
      <Form>
        <div className={style.messeges}>
          <div>
            <div>{messagesElements}</div>
            <Field
              name={'EnterMessege'}
              placeholder={'Enter your messege'}
              component={'input'}
            />
          </div>
          <div>
            <button type='submit'>Send</button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default Dialogs
