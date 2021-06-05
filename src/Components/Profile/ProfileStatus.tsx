import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../Redux/profile-reducer'
import { AppStateType } from '../../Redux/redux-store'
import { InputStiled } from '../common/FormControls/FormControlsStyled'
import { StatusProfile } from './ProfileStaled'

const ProfileStatus: React.FC = () => {
  const { status } = useSelector((state: AppStateType) => state.profilePage)
  const { login } = useSelector((state: AppStateType) => state.auth.data)
  const { fullName } = useSelector(
    (state: AppStateType) => state.profilePage.profile
  )

  const [editMode, setEditMode] = useState(false)
  const [Status, setStatus] = useState(status)

  const dispatch = useDispatch()

  useEffect(() => {
    setStatus(status)
  }, [status])

  const activateEditMode = () => {
    if (login === fullName) {
      setEditMode(true)
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    if (Status !== status) {
      dispatch(updateStatus(Status))
    }
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <StatusProfile>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
      ) : (
        <div>
          <InputStiled
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={Status}
            fontSize={'22px'}
          />
        </div>
      )}
    </StatusProfile>
  )
}
export default ProfileStatus
