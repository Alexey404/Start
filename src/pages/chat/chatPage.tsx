import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  sendMessage,
  startMessagesListening,
  stoptMessagesListening,
} from '../../Redux/chat-reduser'
import { AppStateType } from '../../Redux/redux-store'

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}
const Chat = () => {
  const status = useSelector((state: AppStateType) => state.chat.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stoptMessagesListening())
    }
  }, [])

  const color = status === 'ready' ? 'green' : 'red'

  return (
    <div>
      <div style={{ background: color, width: '60px', textAlign: 'center' }}>
        {status}
      </div>
      <Messeges />
      <AddMessege />
    </div>
  )
}
const Messeges: FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat?.messages)

  return (
    <div style={{ height: '350px', overflowY: 'auto' }}>
      {messages?.map((m: any, index: any) => (
        <Messege message={m} key={index} />
      ))}
    </div>
  )
}

const Messege = (props: any) => {
  const history = useHistory()

  const Url = (id: any) => {
    history.push({
      pathname: `/profile`,
      search: `?userId=${id}`,
    })
  }

  return (
    <div>
      <span
        style={{ cursor: 'pointer', marginRight: '50px' }}
        onClick={() => {
          Url(props.message.userId)
        }}
      >
        <img style={{ width: '50px' }} src={props.message.photo} />
      </span>
      <span
        style={{ cursor: 'pointer', marginRight: '50px' }}
        onClick={() => {
          Url(props.message.userId)
        }}
      >
        {props.message.userName}
      </span>
      {props.message.message}
      <hr />
    </div>
  )
}

const AddMessege: FC = () => {
  const status = useSelector((state: AppStateType) => state.chat.status)
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const sendMessegHandler = () => {
    if (status === 'ready') {
      dispatch(sendMessage(message))
      setMessage('')
    }
  }
  return (
    <div>
      <textarea
        onChange={e => setMessage(e.currentTarget.value)}
        value={message}
      ></textarea>
      <button disabled={status !== 'ready'} onClick={sendMessegHandler}>
        Send
      </button>
    </div>
  )
}

export default ChatPage
