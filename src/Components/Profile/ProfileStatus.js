<<<<<<< HEAD
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
=======
import React from 'react'
import { StatusProfile } from './ProfileStaled'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    if (this.state.status !== this.props.status) {
      this.props.updateStatus(this.state.status)
      console.log('Робит как надо!')
    }
  }

  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }

  render() {
    return (
      <StatusProfile>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'No status'}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </StatusProfile>
    )
  }
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
}
export default ProfileStatus
