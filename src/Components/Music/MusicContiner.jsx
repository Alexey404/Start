import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import Music from './music'

const MusicContiner = (props) => {
  return <Music {...props} />
}

export default compose(withAuthRedirect)(MusicContiner)
