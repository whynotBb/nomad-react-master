const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((reponse) => reponse.json());
}

export function fetchCoinInfo(coninId: string) {
  return fetch(`${BASE_URL}/coins/${coninId}`).then((reponse) =>
    reponse.json()
  );
}
export function fetchCoinTickers(coninId: string) {
  return fetch(`${BASE_URL}/tickers/${coninId}`).then((reponse) =>
    reponse.json()
  );
}

export function fetchCoinHistory(coninId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coninId}`
  ).then((reponse) => reponse.json());
}
