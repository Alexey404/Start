import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from '../../../utils/validators'
import { Input } from '../../common/FormControls/FormsControls'
import Post from '../Post/post'

const maxLenght = maxLenghtCreator(10)

let MyPosts = props => {
  const onSubmit = formData => {
    props.addPost(formData.Post)
  }

  let postsElement = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
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

let PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'Post'}
        component={Input}
        validate={[required, maxLenght]}
      />
      <button>Add post</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(PostForm)

export default MyPosts
