import React from "react";
import styled, { css } from "styled-components";

export const Botao = styled.button`
  width: 32rem;
  height: 4.31rem;
  border-radius: 2.12rem;
  padding: 0;
  border: none;

  left: 52.5rem;
  margin-top: 300px;

  ${(props) =>
    props.primary &&
    css`
      background-color: rgba(255, 132, 18, 1);
      color: white;
      font-family: roboto, monospace;
      font-weight: 900;
      line-height: 38px;
      font-size: 32px;
    `};
`;
