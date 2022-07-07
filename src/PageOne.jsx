import styled from "styled-components";

export const PageOne = styled.div`
  background-color: rgba(49, 54, 172, 1);
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 94.5rem;
  height: 63.9rem;
  left: 0px;
  top: 0px;

  /* font-size: calc(10px + 2vmin);
  color: white; */
`;

export const PageTwo = styled.div`
  background-color: rgba(49, 54, 172, 1);

  width: 94.5rem;
  height: 63.9rem;
  left: 0px;
  top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const PageThree = styled(PageOne)``;

export const PageFour = styled(PageOne)``;

export const ContainerImag = styled.span`
  width: 25.3rem;
  height: 11.13rem;
  margin: 7.5rem 57.18rem 0 11.7rem;
  color: #f9f9f9;
`;

export const ContainerH2 = styled.h2`
  width: 28.93rem;
  height: 8.25rem;
  margin: 0 53.87rem 2.75rem 11.68rem;
  padding: 0;

  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.42rem;
  line-height: 3rem;

  color: #f9f9f9;
`;

export const ContainerP = styled.p`
  width: 29.5rem;
  height: 11.93rem;
  margin: 2.43rem 8.87rem 2.43rem -31.87rem;
  font-family: poppins, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.87rem;

  color: #f9f9f9;
`;
