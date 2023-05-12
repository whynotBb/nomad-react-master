import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
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
interface chartProps {
  coinId: string;
}
function Chart({ coinId }: chartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  // console.log(data?.map((price) => Number(price.close)) as number[]);

  return (
    <div>
      {isLoading ? (
        "Loading chart ..."
      ) : (
        <>
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: data?.map((price) => Number(price.close)) as number[],
              },
            ]}
            options={{
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              theme: {
                mode: "dark",
              },
              stroke: {
                curve: "smooth",
                width: 3,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                categories: data?.map((price) =>
                  new Date(price.time_close * 1000).toUTCString()
                ),
                type: "datetime",
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                },
              },
              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: ["#0be881"],
                  stops: [0, 100],
                },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(2)}`,
                },
              },
            }}
          />

          <ApexChart
            type="candlestick"
            series={[
              {
                data: [
                  // {
                  //   x: new Date(1538778600000),
                  //   y: [6629.81, 6650.5, 6623.04, 6633.33],
                  // },
                  // {
                  //   x: new Date(1538780400000),
                  //   y: [6632.01, 6643.59, 6620, 6630.11],
                  // },
                ],
              },
            ]}
            height={350}
            options={{
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              theme: {
                mode: "dark",
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                categories: data?.map((price) =>
                  new Date(price.time_close * 1000).toUTCString()
                ),
                type: "datetime",
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
}
export default Chart;
