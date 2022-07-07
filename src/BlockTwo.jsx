import React from "react";
import Photo from "./image/image_woman.svg";
import Art_topo from "./image/art_topo.svg";
import Art_graphic from "./image/art_graphic.svg";
import Coin from "./image/coin.svg";
import Star from "./image/star.svg";

import { Botao } from "./Button";
import {
  BlockImageTopo,
  FormContainer,
  StyelH2,
  ContentArt,
  ContentArt1,
  ContentStar,
} from "./BlockTwocss";
import { Input, Input2, Input3, Input4 } from "./input";

function BlockTwo() {
  return (
    <>
      <div>
        <BlockImageTopo>
          <img src={Photo} alt="Phhoto_woman" />
          <ContentArt>
            <img src={Art_topo} alt="ilustação" />
            <ContentArt1>
              <img src={Art_graphic} alt="ilustração grafico" />
              <ContentStar>
                <img src={Star} alt="estrela" />
              </ContentStar>
              <img src={Coin} alt="Moeda" />
            </ContentArt1>
          </ContentArt>
        </BlockImageTopo>
      </div>
      <div>
        <FormContainer>
          <StyelH2>Lorem ipsum dolor sit amet.</StyelH2>
          <Input placeholder="Name" />
          <Input2 placeholder="Meu site" />
          <Input3 placeholder="Email" />
          <Input4 placeholder="Telefone" />

          <Botao primary>Enviar</Botao>
        </FormContainer>
      </div>
    </>
  );
}

export default BlockTwo;
