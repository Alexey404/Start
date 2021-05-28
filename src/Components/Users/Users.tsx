import User from './User'

type Props = {
  users: any
  unfollow: (id: number) => void
  follow: (id: number) => void
  followingInProgress: any
  isFetching: boolean
}

const Users: React.FC<Props> = ({
  users,
  unfollow,
  follow,
  followingInProgress,
  isFetching,
}) => {
  return (
    <div>
      {users.map((u: any) => (
        <User
          key={u.id}
          user={u}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
          isFetching={isFetching}
          follow={follow}
        />
      ))}
    </div>
  )
}
export default Users
