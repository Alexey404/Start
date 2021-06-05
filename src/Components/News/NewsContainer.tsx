import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import News from './news'

const NewsContiner = () => {
  return <News />
}

export default compose(WithAuthRedirect)(NewsContiner)
