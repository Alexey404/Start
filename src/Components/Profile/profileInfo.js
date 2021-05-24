<<<<<<< HEAD
import { useState } from 'react'
import { DivFullGray } from '../common/FormControls/FullGrayStyled'
import {
  NameProfile,
  ProfilePhoto,
  ProfileStiled,
  ProfilePhotoCont,
  InputUpload,
} from './ProfileStaled'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  const mainPhotoCelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
      console.log(e.target.files[0])
    }
  }

  const ProfilePhotoItem = () => {
    return (
      <>
        <ProfilePhoto
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : 'https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png'
          }
          alt=''
        />
      </>
    )
  }

  const Fetching = (item) => {
    return !props.isFetchingProfile ? <div>{item}</div> : <DivFullGray />
  }
  return (
    <ProfileStiled>
      <ProfilePhotoCont>{Fetching(<ProfilePhotoItem />)} </ProfilePhotoCont>{' '}
      {props.login === props.profile.fullName ? (
        <InputUpload type='file' onChange={mainPhotoCelected} />
      ) : undefined}
      <div>
        {Fetching(<NameProfile>{props.profile.fullName}</NameProfile>)}
        {Fetching(
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            fullName={props.profile.fullName}
            login={props.login}
          />
        )}
      </div>
      <NameProfile>
        Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}
      </NameProfile>
    </ProfileStiled>
  )
}

=======
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

>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
export default ProfileInfo
