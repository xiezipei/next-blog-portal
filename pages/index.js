import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={ styles.container }>
      <Header></Header>
      <div className={ styles.content }>
        <div className={ styles.inner }>
          <div className={ styles.sidebar }>sidebar</div>
          <div className={ styles.main }>main</div>
        </div>
      </div>
    </div>
  )
}
