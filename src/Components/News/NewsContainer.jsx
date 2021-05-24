import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import News from './news'

const NewsContiner = () => {
  return <News />
}

export default compose(withAuthRedirect)(NewsContiner)
