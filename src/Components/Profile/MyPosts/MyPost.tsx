import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../../Redux/redux-store'
import Post from '../Post/post'

const MyPosts: React.FC = () => {
  const { posts } = useSelector((state: AppStateType) => state.profilePage)

  const postsElement = posts.map((posts: any, index: number) => (
    <Post key={index} message={posts.message} likesCount={posts.likesCount} />
  ))

  return (
    <div>
      <div>
        <PostForm />
      </div>
      <div>{postsElement}</div>
    </div>
  )
}

const PostForm: React.FC = () => {
  const dispatch = useDispatch()

  const submit = (value: any) => {
    dispatch({
      type: 'ADD-POST',
      text: value.Post,
    })
  }
  return (
    <Formik initialValues={{ Post: '' }} onSubmit={submit}>
      <Form>
        <Field type='text' name='Post' />
        <button type='submit'>Add post</button>
      </Form>
    </Formik>
  )
}

export default MyPosts
