import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Settings from './settings'

const SettingsContainer = () => {
  return <Settings />
}

export default compose(withAuthRedirect)(SettingsContainer)
