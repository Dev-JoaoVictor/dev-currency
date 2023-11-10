import styles from './details.module.css'
import { useParams } from 'react-router-dom'
import { useDetails } from '../../hooks/useDetails'
import { Loading } from '../../components/Loading';

export function Details() {
  const { cripto } = useParams();
  const { detail, loading } = useDetails(String(cripto));

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{detail?.name}</h1>
      <p className={styles.center}>{detail?.symbol}</p>
      <section className={styles.content}>
        <ul>
          <li>
            <strong>Preço: </strong>{detail?.formatedPrice}
          </li>
          <li>
            <strong>Delta 24h: </strong>
            <span className={Number(detail?.formatedDelta) >= 0 ? styles.profit : styles.loss}>
              {detail?.delta_24h}
            </span>
          </li>
          <li>
            <strong>Maior preço 24h: </strong>{detail?.formatedHighPrice}
          </li>
          <li>
            <strong>Menor preço 24h: </strong>{detail?.formatedHighPrice}
          </li>
          <li>
            <strong>Valor mercado: </strong>{detail?.formatedMarket}
          </li>
        </ul>
      </section>
    </div>
  )
}