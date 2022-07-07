// styled componets

import {
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  ContainerImag,
  ContainerH2,
  ContainerP,
} from "./PageOne";
import BlockOne from "./blockOne";
import BlockTwo from "./BlockTwo";
import { ContentImg } from "./PageTwocss";
// imagens
import logo_Topo from "./image/image_logo_topo.svg";

function App() {
  return (
    <>
      <PageOne>
        <ContainerImag>
          <div>
            <img src={logo_Topo} alt="Seu logo" />
          </div>
        </ContainerImag>
        <ContainerH2>
          <h2>Lorem ipsum dolor, sit amet consectetur .</h2>
        </ContainerH2>

        <ContainerP>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            sequi, magnam illo corrupti atque consectetur quod incidunt id totam
            sit magni modi ab asperiores repellat nihil beatae repudiandae
            voluptates? Tempora?
          </p>
        </ContainerP>
        <BlockOne />
        <BlockTwo />
      </PageOne>
      <hr />
      <PageTwo>
        pagina 2<header>Lorem ipsum dolor sit amet.</header>
        <ContentImg>
          <img src="" alt="" />
        </ContentImg>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            error quas quaerat ea. Earum sequi est corporis fugiat accusantium
            similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellat fugiat deleniti facere ullam possimus necessitatibus eum
            nemo odio ab, magni ea dicta error repellendus corrupti molestias?
            Temporibus, sint, accusamus magni nemo facere illum excepturi fugit
            omnis nobis reprehenderit a voluptatum optio asperiores adipisci
            natus, ullam minima in ea. Officia, necessitatibus!
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            error quas quaerat ea. Earum sequi est corporis fugiat accusantium
            similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellat fugiat deleniti facere ullam possimus necessitatibus eum
            nemo odio ab, magni ea dicta error repellendus corrupti molestias?
            Temporibus, sint, accusamus magni nemo facere illum excepturi fugit
            omnis nobis reprehenderit a voluptatum optio asperiores adipisci
            natus, ullam minima in ea. Officia, necessitatibus!
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            error quas quaerat ea. Earum sequi est corporis fugiat accusantium
            similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellat fugiat deleniti facere ullam possimus necessitatibus eum
            nemo odio ab, magni ea dicta error repellendus corrupti molestias?
            Temporibus, sint, accusamus magni nemo facere illum excepturi fugit
            omnis nobis reprehenderit a voluptatum optio asperiores adipisci
            natus, ullam minima in ea. Officia, necessitatibus!
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            error quas quaerat ea. Earum sequi est corporis fugiat accusantium
            similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellat fugiat deleniti facere ullam possimus necessitatibus eum
            nemo odio ab, magni ea dicta error repellendus corrupti molestias?
            Temporibus, sint, accusamus magni nemo facere illum excepturi fugit
            omnis nobis reprehenderit a voluptatum optio asperiores adipisci
            natus, ullam minima in ea. Officia, necessitatibus!
          </p>
        </div>
      </PageTwo>
      <hr />
      <PageThree>pagina 3</PageThree>;
      <hr />
      <PageFour>pagina 4</PageFour>
    </>
  );
}

export default App;
