import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface IFormattedHistorical {
  x: Date;
  y: number[];
}
interface chartProps {
  coinId: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: chartProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", "coinId"],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 10000,
    }
  );
  console.log("data", data);

  return (
    <div>
      {isLoading ? (
        "price loading"
      ) : (
        <>
          <div>Price : ${data?.quotes.USD.price.toFixed(2)}</div>
          <div>
            percent_change_1h : {data?.quotes.USD.percent_change_1h.toFixed(2)}%
          </div>
        </>
      )}
    </div>
  );
}
export default Price;
