import { Button } from 'antd'
import { Field, Form, Formik } from 'formik'
import { DisplayFlex } from '../common/FormControls/displayFlex'
import { UserFollow } from './StyledUser'

type UsersSearchType = {
  term: string | null | undefined
  friends: string | null | undefined
}

const UsersSearchForm = ({ onClickTerm }: any) => {
  const submit = (values: UsersSearchType) => {
    onClickTerm(values)
    console.log(values)
  }
  return (
    <Formik initialValues={{ term: '', friends: '' }} onSubmit={submit}>
      <Form>
        <DisplayFlex>
          <Field type='text' name='term' />
          <Field name='friends' as='select'>
            <option value=''>All</option>
            <option value='follow'> Only followed</option>
            <option value='unfollow'>Only unfollow</option>
          </Field>
          <button type='submit'>Search</button>
        </DisplayFlex>
      </Form>
    </Formik>
  )
}

export default UsersSearchForm
