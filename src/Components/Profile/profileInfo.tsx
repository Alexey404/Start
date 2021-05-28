import { ChangeEvent } from 'react'
import { DivFullGray } from '../common/FormControls/FullGrayStyled'
import {
  NameProfile,
  ProfilePhoto,
  ProfileStiled,
  ProfilePhotoCont,
  InputUpload,
} from './ProfileStaled'
import ProfileStatus from './ProfileStatus'

type Props = {
  profile: any
  status: string
  login: string | null
  isFetchingProfile: boolean
  updateStatus: (Status: string) => void
  savePhoto: (files: any) => void
}

const ProfileInfo: React.FC<Props> = ({
  profile,
  status,
  login,
  isFetchingProfile,
  updateStatus,
  savePhoto,
}) => {
  const mainPhotoCelected = (e: any) => {
    if (e.target.files.length) {
      const files = e.target.files[0]
      savePhoto(files)
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
        {Fetching(
          <ProfileStatus
            status={status}
            updateStatus={updateStatus}
            fullName={profile.fullName}
            login={login}
          />
        )}
      </div>
      <NameProfile>
        Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
      </NameProfile>
    </ProfileStiled>
  )
}

export default ProfileInfo
