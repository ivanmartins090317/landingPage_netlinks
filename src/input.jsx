import styled from "styled-components";

export const Input = styled.input`
  &&::placeholder {
    left: 15rem;
    color: rgba(152, 152, 152, 1);
    padding: 0 0 0 26px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 19.65px;
    line-height: 23px;
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
