import React from "react";
import {
  PBlock,
  ContainerLogo,
  ContainerP,
  ContainerBlock,
  ContainerMainBlock,
} from "./bloOnecss";

import LogoPequeno from "./image/logo_Redondo_pequeno.svg";

function BlockOne() {
  return (
    <>
      <header>
        <PBlock>
          Lorem, ipsum <strong>#dolor</strong>
        </PBlock>
      </header>
      {/* BLOckOne */}
      <ContainerMainBlock>
        <ContainerBlock>
          <ContainerLogo>
            <img src={LogoPequeno} alt="logo" />
          </ContainerLogo>
          <ContainerP>
            <strong>Lorem ipsum dolor.</strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, dolores.
          </ContainerP>
        </ContainerBlock>

        <ContainerBlock>
          <ContainerLogo>
            <img src={LogoPequeno} alt="logo" />
          </ContainerLogo>
          <ContainerP>
            <strong>Lorem ipsum dolor.</strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, dolores.
          </ContainerP>
        </ContainerBlock>
      </ContainerMainBlock>
      {/* BlockTwo */}
      <ContainerMainBlock>
        <ContainerBlock>
          <ContainerLogo>
            <img src={LogoPequeno} alt="logo" />
          </ContainerLogo>
          <ContainerP>
            <strong>Lorem ipsum dolor.</strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, dolores.
          </ContainerP>
        </ContainerBlock>

        <ContainerBlock>
          <ContainerLogo>
            <img src={LogoPequeno} alt="logo" />
          </ContainerLogo>
          <ContainerP>
            <strong>Lorem ipsum dolor.</strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis, dolores.
          </ContainerP>
        </ContainerBlock>
      </ContainerMainBlock>
    </>
  );
}

export default BlockOne;
