import { connect } from 'react-redux'
import { addPost } from '../../../Redux/profile-reducer'
import { AppStateType } from '../../../Redux/redux-store'
import MyPosts from './MyPost'

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer
