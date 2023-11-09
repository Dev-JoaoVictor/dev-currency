import styles from './loading.module.css'

export function Loading() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Carregando informações...</h1>
    </div>
  )
}