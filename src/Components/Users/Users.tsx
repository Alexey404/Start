import { useSelector } from 'react-redux'
import { getUsers } from '../../Redux/users-selectors'
import User from './User'

type Props = {}

const Users: React.FC<Props> = () => {
  const users = useSelector(getUsers)

  return (
    <div>
      {users.map((u: any) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  )
}
export default Users
