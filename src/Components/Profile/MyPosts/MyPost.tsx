import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { PostsType } from '../../../Redux/profile-reducer'
import { required, maxLenghtCreator } from '../../../utils/validators'
import { Input } from '../../common/FormControls/FormsControls'
import Post from '../Post/post'

const maxLenght = maxLenghtCreator(10)

type Props = {
  addPost: (Post: string) => void
  posts: Array<PostsType>
}

const MyPosts: React.FC<Props> = ({ addPost, posts }) => {
  const onSubmit = (formData: LoginFrmValue) => {
    addPost(formData.Post)
  }

  const postsElement = posts.map((posts: any) => (
    <Post message={posts.message} likesCount={posts.likesCount} />
  ))

  return (
    <div>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
      <div>{postsElement}</div>
    </div>
  )
}
type LoginFrmValue = {
  Post: string
}
type IProps = {}

const PostForm: React.FC<InjectedFormProps<LoginFrmValue, IProps> & IProps> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name={'Post'} component={Input} validate={[required, maxLenght]} />
      <button>Add post</button>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFrmValue, IProps>({
  form: 'login',
})(PostForm)

export default MyPosts
