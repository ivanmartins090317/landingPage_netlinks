import styled from "styled-components";

export const Input = styled.input`
  &::placeholder {
    margin-left: 10rem;
    color: #f3a2a2;
  }
  box-sizing: border-box;

  position: absolute;
  width: 512px;
  height: 54px;
  margin-top: -19rem;

  background-color: #ffffff;
  border: 1px solid #3039c3;
  border-radius: 26.7637px;
`;

export const Input2 = styled(Input)`
  position: absolute;
  margin-top: -9rem;
`;
export const Input3 = styled(Input)`
  position: absolute;
  margin-top: 1rem;
`;
export const Input4 = styled(Input)`
  position: absolute;
  margin-top: 11rem;
`;
