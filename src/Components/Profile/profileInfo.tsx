import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePhoto } from '../../Redux/profile-reducer'
import { AppStateType } from '../../Redux/redux-store'
import { DivFullGray } from '../common/FormControls/FullGrayStyled'
import {
  InputUpload,
  NameProfile,
  ProfilePhoto,
  ProfilePhotoCont,
  ProfileStiled,
} from './ProfileStaled'
import ProfileStatus from './ProfileStatus'

const ProfileInfo: React.FC = () => {
  const { profile, isFetchingProfile } = useSelector(
    (state: AppStateType) => state.profilePage
  )
  const { login } = useSelector((state: AppStateType) => state.auth.data)

  const dispatch = useDispatch()

  const mainPhotoCelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const files = e.target.files[0]
      dispatch(savePhoto(files))
    }
  }

  const ProfilePhotoItem = () => {
    return (
      <>
        <ProfilePhoto
          src={
            profile.photos.large != null
              ? profile.photos.large
              : 'https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png'
          }
          alt=''
        />
      </>
    )
  }

  const Fetching = (item: any) => {
    return !isFetchingProfile ? <div>{item}</div> : <DivFullGray />
  }
  return (
    <ProfileStiled>
      <ProfilePhotoCont>{Fetching(<ProfilePhotoItem />)} </ProfilePhotoCont>
      {login === profile.fullName ? (
        <InputUpload type='file' onChange={mainPhotoCelected} />
      ) : undefined}
      <div>
        {Fetching(<NameProfile>{profile.fullName}</NameProfile>)}
        {Fetching(<ProfileStatus />)}
      </div>
      <NameProfile>
        Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
      </NameProfile>
    </ProfileStiled>
  )
}

export default ProfileInfo
