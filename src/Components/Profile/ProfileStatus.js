import { useEffect } from 'react'
import { useState } from 'react'
import { InputStiled } from '../common/FormControls/FormControlsStyled'
import { StatusProfile } from './ProfileStaled'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    if (props.login === props.fullName) {
      setEditMode(true)
    }
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    if (status !== props.status) {
      props.updateStatus(status)
    }
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <StatusProfile>
      {!editMode && (
        <span
          disabled={!props.login === props.fullName}
          onDoubleClick={activateEditMode}
        >
          {props.status || 'No status'}
        </span>
      )}
      {editMode && (
        <div>
          <InputStiled
        
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            fontSize={'22px'}
          />
        </div>
      )}
    </StatusProfile>
  )
}
export default ProfileStatus
