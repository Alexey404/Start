import MyPostsContainer from './MyPosts/MyPostContainer'
import style from './profile.module.scss'
import ProfileInfo from './profileInfo'

type Props = {
  profile: any
  status: string
  login: string | null
  isFetchingProfile: boolean
  updateStatus: (Status: string) => void
  savePhoto: (files: any) => void
}

const Profile: React.FC<Props> = props => {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          login={props.login}
          isFetchingProfile={props.isFetchingProfile}
          savePhoto={props.savePhoto}
        />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile
