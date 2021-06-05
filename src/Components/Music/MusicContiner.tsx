import { compose } from 'redux'
import WithAuthRedirect from '../../hoc/withAuthRedirect'
import Music from './music'

const MusicContiner = (props: any) => {
  return <Music {...props} />
}

export default compose(WithAuthRedirect)(MusicContiner)
