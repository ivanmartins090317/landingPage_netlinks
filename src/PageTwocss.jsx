import styled from "styled-components";

export const LineVertical = styled.div`
  position: absolute;
  border-left: 4px solid #111;
  margin: 2517px 50% 0 50%;
  height: 2782px;
`;

export const ContentHeader = styled.div`
  position: absolute;
  width: 723px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50% 40% 20%;
  font-family: poppins, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 49px;
  line-height: 56px;
`;

// bloco1
export const ContentImg = styled.div`
  position: absolute;
  margin-top: 460px;
  width: 250px;
  height: 250px;
  grid-column: 1/2;
  color: #111;
  margin: 200px 0 0 92px;
`;

export const ContentLorem = styled.div`
  position: absolute;
  width: 532px;
  height: 392px;
  text-align: right;

  font-family: poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  /* or 180% */

  color: #f9f9f9;

  && > h2 {
    margin-bottom: 85px;
    background-color: #111;
  }

  margin: 1000px 0 0 -90px;
`;
// bloco 2

export const ContentImg1 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  margin: 1460px 0 0 886px;
`;

export const ContentLorem1 = styled.div`
  position: absolute;
  width: 532px;
  height: 392px;
  text-align: left;
  margin: -200px 0 0 86px;
  height: 392px;
  left: 824px;
  top: 1549px;

  font-family: poppins, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  /* or 180% */

  color: #f9f9f9;

  && > h2 {
    margin-bottom: 85px;
    background-color: #111;
  }
`;
// bloco 3
export const ContentImg2 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: #ffff;
  grid-column: 3/4;
  margin: 2900px 0 0 135px;
`;

export const ContentLorem2 = styled.div`
  position: absolute;
  width: 350px;
  height: 250px;
  text-align: right;
  margin: 1560px 0 0 -1100px;
`;

// bloco 4
export const ContentLorem3 = styled.div`
  position: absolute;
  width: 535px;
  height: 428px;
  text-align: right;
  margin: 910px 0 0 735px;
`;

export const ContentImg3 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: #ffff;
  margin: 2700px 0 0 820px;
`;
