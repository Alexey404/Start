import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from '../dialogs.module.scss'

type Props = {
  name: string
  id: number
}

const DialogItem: FC<Props> = ({ id, name }) => {
  const path = '/dialogs/' + id

  return (
    <NavLink to={path}>
      <div className={style.dialogItem}>{name}</div>
    </NavLink>
  )
}

export default DialogItem
