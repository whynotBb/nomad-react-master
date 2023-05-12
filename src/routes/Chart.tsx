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
interface IFormattedHistorical {
  x: Date;
  y: number[];
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

  const formattedData: IFormattedHistorical[] =
    data?.map((d: IHistorical) => ({
      x: new Date(d.time_close * 1000),
      y: [
        parseFloat(d.open),
        parseFloat(d.high),
        parseFloat(d.low),
        parseFloat(d.close),
      ],
    })) || [];

  console.log("formattedData", formattedData);

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
                data: formattedData,
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
