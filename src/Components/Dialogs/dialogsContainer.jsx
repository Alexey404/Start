import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { sendMessage } from '../../Redux/dilogs-reducer'
import Dialogs from './dialogs'

<<<<<<< HEAD
const mapStateToProps = (state) => {
  return { state: state.dialogsPage, resultCode: state.auth.resultCode }
}

export default compose(
  connect(mapStateToProps, { sendMessage }),
=======
let mapStateToProps = state => {
  return { state: state.dialogsPage, resultCode: state.auth.resultCode }
}


export default compose(
  connect(mapStateToProps, {sendMessage}),
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  withAuthRedirect
)(Dialogs)
