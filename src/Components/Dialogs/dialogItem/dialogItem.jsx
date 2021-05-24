import { NavLink } from 'react-router-dom'
import style from '../dialogs.module.scss'

const DialogItem = props => {
  const path = '/dialogs/' + props.id

  return (
    <NavLink to={path}>
      <div className={style.dialogItem}>{props.name}</div>
    </NavLink>
  )
}

export default DialogItem
