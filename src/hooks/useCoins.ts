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
  formatedDelta: string;
}

interface DataProps {
  coins: CoinsProps[];
}

export function useCoins() {
  const [coins, setCoins] = useState<CoinsProps[]>([]);
  const [loading, setLoading] = useState(true);

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
            formatedDelta: item.delta_24h.replace(",", "."),
          };
          return formated;
        });
        setLoading(false);
        setCoins(formatResult);
      }
    }

    getData();
  }, [coins]);

  return {
    coins,
    loading,
  };
}
