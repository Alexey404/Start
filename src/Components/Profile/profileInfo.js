import React from 'react'
import { NameProfile, ProfilePhoto, ProfileStiled } from './ProfileStaled'
import ProfileStatus from './ProfileStatus'

let ProfileInfo = props => {
  return (
    <ProfileStiled>
      <ProfilePhoto
        src={
          props.profile.photos.large != null
            ? props.profile.photos.large
            : 'https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png'
        }
        alt=''
      />
      <div>
        <NameProfile>{props.profile.fullName}</NameProfile>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
          fullName={props.profile.fullName}
          login={props.login}
        />
      </div>
    </ProfileStiled>
  )
}

export default ProfileInfo
