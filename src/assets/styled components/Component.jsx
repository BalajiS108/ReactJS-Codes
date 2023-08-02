import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
`;
const Div = styled.div`
  background-color: brown;
  padding: 20px;
`;
const Input = styled.input`
  background-color: pink;
  padding: 20px;
`;

function Component() {
  return (
    <div>
      <Button>Click me</Button>
      <Div>Hello</Div>
      <Input type="text" />
    </div>
  );
}

export default Component;
