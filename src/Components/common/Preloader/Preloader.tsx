import prealoader from './../../../assets/three-dots.svg'
import styles from './../../Users/user.module.scss'

const Preloader = () => {
  return (
    <div className={styles.prealoaderCont}>
      <img className={styles.prealoader} src={prealoader} alt='' />
    </div>
  )
}

export default Preloader
