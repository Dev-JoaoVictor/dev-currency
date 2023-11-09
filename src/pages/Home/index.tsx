import { Link } from 'react-router-dom';
import styles from './home.module.css';

import { BiSearch } from 'react-icons/bi'
import { useApi } from '../../hooks/useApi';

export function Home() {

  const { coins } = useApi();

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder='Digite o código da Ex: BTC'
        />
        <button type='submit'>
          <BiSearch size={20} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope='col'>Moeda</th>
            <th scope='col'>Valor Mercado</th>
            <th scope='col'>Preço</th>
            <th scope='col'>Volume</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <div className='tbody-container'>
            {
              coins.map(coin => (
                <tr key={coin.name} className={styles.tr}>
                  <td className={styles.tdLabel} data-label="Moeda">
                    <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                      <span>{coin.name}</span> | {coin.symbol}
                    </Link>
                  </td>
                  <td className={styles.tdLabel} data-label="Mercado">
                    {coin.formatedMarket}
                  </td>
                  <td className={styles.tdLabel} data-label="Preço">
                    {coin.formatedPrice}
                  </td>
                  <td className={Number(coin?.delta_24h) >= 0 ? styles.tdProfit : styles.tdProfit} data-label="Volume">
                    <span>{coin.delta_24h}</span>
                  </td>
                </tr>
              ))
            }
          </div>
        </tbody>
      </table>
    </main>
  )
}