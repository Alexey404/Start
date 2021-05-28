import style from '../profile.module.scss'

type Props = {
  message: string
  likesCount: number
}

const Post: React.FC<Props> = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      {message}
      <br />
      <span>Like:{likesCount}</span>
    </div>
  )
}

export default Post
