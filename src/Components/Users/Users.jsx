import User from './User.jsx'

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <User key={u.id} {...props} user={u} />
      ))}
    </div>
  )
}
export default Users
