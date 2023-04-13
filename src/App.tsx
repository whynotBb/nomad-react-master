import styled from "styled-components";
const Wrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Text = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Wrap>
      <Text>Hello</Text>
    </Wrap>
  );
}

export default App;
