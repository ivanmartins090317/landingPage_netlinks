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
import {
  ContentImg,
  ContentImg1,
  ContentImg2,
  ContentImg3,
  ContentLorem,
  ContentLorem1,
  ContentLorem2,
  ContentLorem3,
  ContentHeader,
  LineVertical,
  LoremStyle,
  ImgCenter1,
  ImgCenter2,
  ImgCenter3,
  ImgCenter4,
} from "./PageTwocss";
// imagens
import logo_Topo from "./image/image_logo_topo.svg";
import Frame_page2 from "./image/Frame_page2.svg";
import SEO_analytics_team from "./image/SEO_analytics_team_1_.svg";
import Ilustra_3 from "./image/ilustra_3.svg";
import Ilustra_4 from "./image/ilustra_4.svg";

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
        <ContentHeader>
          <LoremStyle>
            <h3></h3>
          </LoremStyle>
          <h3>ipsum dolor sit amet.</h3>
        </ContentHeader>

        <ContentImg>
          <img src={Frame_page2} alt="" />
        </ContentImg>
        <LineVertical></LineVertical>
        <div>
          <ContentLorem>
            <ImgCenter4>
              <img src="" alt="" />
            </ImgCenter4>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores error quas quaerat ea. Earum sequi est corporis fugiat
              accusantium similique? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat fugiat deleniti facere ullam possimus
              necessitatibus eum nemo odio ab, magni ea dicta error repellendus
              corrupti molestias? Temporibus, sint, accusamus magni nemo facere
              illum excepturi fugit omnis nobis reprehenderit a voluptatum optio
              asperiores adipisci natus, ullam minima in ea. Officia,
              necessitatibus!
            </p>
          </ContentLorem>
        </div>

        <ContentImg1>
          <img src={SEO_analytics_team} alt="" />
        </ContentImg1>
        <div>
          <ImgCenter1>
            <h1>1</h1>
            <img src="" alt="" />
          </ImgCenter1>
          <ContentLorem1>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores error quas quaerat ea. Earum sequi est corporis fugiat
              accusantium similique? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat fugiat deleniti facere ullam possimus
              necessitatibus eum nemo odio ab, magni ea dicta error repellendus
              corrupti molestias? Temporibus, sint, accusamus magni nemo facere
              illum excepturi fugit omnis nobis reprehenderit a voluptatum optio
              asperiores adipisci natus, ullam minima in ea. Officia,
              necessitatibus!
            </p>
          </ContentLorem1>
        </div>

        <ContentImg2>
          <img src={Ilustra_3} alt="" />
        </ContentImg2>
        <div>
          <ImgCenter2>
            <h2>222</h2>
          </ImgCenter2>
          <ContentLorem2>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores error quas quaerat ea. Earum sequi est corporis fugiat
              accusantium similique? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat fugiat deleniti facere ullam possimus
              necessitatibus eum nemo odio ab, magni ea dicta error repellendus
              corrupti molestias? Temporibus, sint, accusamus magni nemo facere
              illum excepturi fugit omnis nobis reprehenderit a voluptatum optio
              asperiores adipisci natus, ullam minima in ea. Officia,
              necessitatibus!
            </p>
          </ContentLorem2>
        </div>

        <ContentImg3>
          <img src={Ilustra_4} alt="" />
        </ContentImg3>
        <div>
          <ImgCenter3>
            <h1>333</h1>
          </ImgCenter3>
          <ContentLorem3>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores error quas quaerat ea. Earum sequi est corporis fugiat
              accusantium similique? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Repellat fugiat deleniti facere ullam possimus
              necessitatibus eum nemo odio ab, magni ea dicta error repellendus
              corrupti molestias? Temporibus, sint, accusamus magni nemo facere
              illum excepturi fugit omnis nobis reprehenderit a voluptatum optio
              asperiores adipisci natus, ullam minima in ea. Officia,
              necessitatibus!
            </p>
          </ContentLorem3>
        </div>
      </PageTwo>
      <PageThree></PageThree>;<PageFour></PageFour>
    </>
  );
}

export default App;
