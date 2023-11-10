import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CoinsProps {
  name: string;
  delta_24h: string;
  price: number;
  symbol: string;
  volume_24h: string;
  market_cap: string;
  total_volume_24h: string;
  low_24h: string;
  high_24h: string;

  formatedPrice: string;
  formatedMarket: string;
  formatedLowPrice: string;
  formatedHighPrice: string;
  formatedDelta: string;
  error?: string;
}

export function useDetails(cripto: string) {
  const [detail, setDetail] = useState<CoinsProps>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function getData() {
      fetch(
        `https://sujeitoprogramador.com/api-cripto/coin/?key=1a4904ece9531d50&symbol=${cripto}`
      )
        .then((response) => {
          if (!response.ok) {
            navigate("/");
          }
          return response.json();
        })
        .then((data: CoinsProps) => {
          const price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });

          const formatedDelta = data.delta_24h.toString().replace(",", ".");

          const resultData = {
            ...data,
            formatedDelta: formatedDelta,
            formatedPrice: price.format(Number(data.price)),
            formatedMarket: price.format(Number(data.market_cap)),
            formatedLowPrice: price.format(Number(data.low_24h)),
            formatedHighPrice: price.format(Number(data.high_24h)),
          };
          setDetail(resultData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, [cripto]);

  return {
    detail,
    loading,
  };
}
