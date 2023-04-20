import { useState } from "react";
import { useParams } from "react-router";
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
function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoding] = useState(true);

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
