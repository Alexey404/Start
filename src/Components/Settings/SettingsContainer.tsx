import { compose } from 'redux'
import withAuthRedirect, { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import Settings from './settings'

const SettingsContainer = () => {
  return <Settings />
}

export default compose(WithAuthRedirect)(SettingsContainer)
