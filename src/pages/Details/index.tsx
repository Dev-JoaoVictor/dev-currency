import { useParams } from 'react-router-dom'
import { useDetails } from '../../hooks/useDetails'

import style from './details.module.css'

export function Details() {
  const { cripto } = useParams();
  const { detail, loading } = useDetails(String(cripto));

  if (loading) {
    return (
      <div className={style.container}>
        <h4 className={style.center}>Carregando informações</h4>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <h1 className={style.center}>{detail?.name}</h1>
      <p>
        {detail?.symbol}
      </p>
    </div>
  )
}