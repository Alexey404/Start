import { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import { InputStiled } from '../common/FormControls/FormControlsStyled'
import { StatusProfile } from './ProfileStaled'

type Props = {
  status: string
  login: string | null
  fullName: string
  updateStatus: (Status: string) => void
}

const ProfileStatus: React.FC<Props> = ({
  status,
  login,
  fullName,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState(false)
  const [Status, setStatus] = useState(status)

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
      updateStatus(Status)
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
