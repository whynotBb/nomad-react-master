import styled from "styled-components";
<<<<<<< HEAD

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; //? -> 필수 아님
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
//props default 값 주기 2가지 위 참고
=======
const Container = styled.div``;

function Circle() {
  return <Container />;
}
>>>>>>> 2642d964883888017a1456ac6cd1a013ce0b68d2
export default Circle;
