import style from '../dialogs.module.scss'

const Message = props => {
  return <div className={style.dialog}>{props.message}</div>
}

export default Message
