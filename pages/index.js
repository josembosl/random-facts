import Container from "../components/Container";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Random Fact
        </h1>
        <Container />
        
        
      </main>
      
    </div>
  )
}