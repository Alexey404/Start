<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
import { Field, reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from '../../../utils/validators'
import { Input } from '../../common/FormControls/FormsControls'
import Post from '../Post/post'

const maxLenght = maxLenghtCreator(10)

<<<<<<< HEAD
const MyPosts = props => {
=======
let MyPosts = props => {
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
  const onSubmit = formData => {
    props.addPost(formData.Post)
  }

<<<<<<< HEAD
  const postsElement = props.posts.map(p => (
=======
  let postsElement = props.posts.map(p => (
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
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

<<<<<<< HEAD
const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'Post'} component={Input} validate={[required, maxLenght]} />
=======
let PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={'Post'}
        component={Input}
        validate={[required, maxLenght]}
      />
>>>>>>> 5e5a38064b815b6bb33114e1c98dd42823ca3da1
      <button>Add post</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login',
})(PostForm)

export default MyPosts
