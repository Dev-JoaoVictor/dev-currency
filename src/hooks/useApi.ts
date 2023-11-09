import { api } from "../services/api";
import { useEffect, useState } from "react";

interface CoinsProps {
  name: string;
  delta_24h: string;
  price: number;
  symbol: string;
  volume_24h: string;
  market_cap: string;
  formatedPrice: string;
  formatedMarket: string;
}

interface DataProps {
  coins: CoinsProps[];
}

export function useApi() {
  const [coins, setCoins] = useState<CoinsProps[]>([]);

  useEffect(() => {
    async function getData() {
      if (coins.length === 0) {
        const response = await api.get("");
        const data: DataProps = response.data;

        const coinsData = data.coins.slice(0, 15);

        const price = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const formatResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.price)),
            formatedMarket: price.format(Number(item.market_cap)),
          };

          return formated;
        });

        setCoins(formatResult);
      }
    }

    getData();
  }, [coins]);

  return {
    coins,
  };
}
