import { Field, Form, Formik } from 'formik'
import React, { FC } from 'react'
import { DisplayFlex } from '../common/FormControls/displayFlex'

type UsersSearchType = {
  term: string | null | undefined
  friends: string | null | undefined
}

type Props = {
  onClickTerm: (values: UsersSearchType) => void
}

export const UsersSearchForm: FC<Props> = React.memo(({ onClickTerm }) => {
  const submit = (values: UsersSearchType) => {
    onClickTerm(values)
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
})
