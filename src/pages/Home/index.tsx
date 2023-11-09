import styles from './home.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi'
import { useCoins } from '../../hooks/useCoins';
import { FormEvent, useState } from 'react';

export function Home() {

  const { coins } = useCoins();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (inputValue === "") return;

    navigate(`/detail/${inputValue}`);
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Digite o código da Ex: BTC'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>
          <BiSearch size={30} color="#fff" />
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
                <td className={Number(coin?.formatedDelta) >= 0 ? styles.tdProfit : styles.tdLoss} data-label="Volume">
                  <span>{coin.formatedDelta}</span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  )
}