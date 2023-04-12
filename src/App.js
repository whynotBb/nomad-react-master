import styled from "styled-components";
const Father = styled.div`
  display: flex;
`;
function App() {
  return (
    <Father>
      <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    </Father>
  );
}

export default App;
