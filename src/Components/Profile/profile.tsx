import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { getProfile, getStatus } from '../../Redux/profile-reducer'
import { parses } from '../../utils/parse'
import MyPostsContainer from './MyPosts/MyPostContainer'
import style from './profile.module.scss'
import ProfileInfo from './profileInfo'

const Profile: React.FC = () => {
  const search = useHistory().location.search

  useEffect(() => {
    const id = parses(search)
    console.log(id)
    dispatch(getProfile(id))
    dispatch(getStatus(id))
  }, [search])

  const dispatch = useDispatch()

  return (
    <div className={style.profile}>
      <div className={style.container}>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile
