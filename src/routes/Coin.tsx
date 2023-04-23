import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoding] = useState(true);
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  // Link 로 보내준 데이터 정보를 useLocation 을 통해 확인
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "loading..."}</Title>
        {/* state가 존재하면 name 을 가져오고 없으면 loading */}
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
