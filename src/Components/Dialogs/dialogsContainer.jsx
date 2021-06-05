import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { actions } from '../../Redux/dilogs-reducer'
import Dialogs from './dialogs'

const mapStateToProps = state => {
  return { state: state.dialogsPage, resultCode: state.auth.resultCode }
}

export default compose(
  connect(mapStateToProps, { sendMessage: actions.sendMessage }),
  withAuthRedirect
)(Dialogs)
