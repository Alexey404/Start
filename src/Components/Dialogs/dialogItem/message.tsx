import { FC } from 'react'
import style from '../dialogs.module.scss'

type Props = {
  message: string
}

const Message: FC<Props> = ({ message }) => {
  return <div className={style.dialog}>{message}</div>
}

export default Message
