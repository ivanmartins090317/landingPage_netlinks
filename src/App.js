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
} from "./PageTwocss";
// imagens
import logo_Topo from "./image/image_logo_topo.svg";
import Frame_page2 from "./image/Frame_page2.svg";
import SEO_analytics_team from "./image/SEO_analytics_team_1_.svg";

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
          <span>Lorem</span> ipsum dolor sit amet.
        </ContentHeader>
        <ContentImg>
          1111
          <img src={Frame_page2} alt="" />
        </ContentImg>
        <LineVertical>1</LineVertical>
        <div>
          <ContentLorem>
            1<h2>Lorem, ipsum.</h2>
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
        <hr />
        <ContentImg1>
          2
          <img src={SEO_analytics_team} alt="" />
        </ContentImg1>
        <div>
          <ContentLorem1>
            2<h2>Lorem, ipsum.</h2>
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
        <hr />
        <ContentImg2>
          3
          <img src="" alt="" />
        </ContentImg2>
        <div>
          <ContentLorem2>
            3<h2>Lorem, ipsum.</h2>
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
        <hr />
        <ContentImg3>
          4
          <img src="" alt="" />
        </ContentImg3>
        <div>
          <hr />
          <ContentLorem3>
            4<h2>Lorem, ipsum.</h2>
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
        <hr />
      </PageTwo>
      <hr />
      <PageThree>pagina 3</PageThree>;
      <hr />
      <PageFour>pagina 4</PageFour>
    </>
  );
}

export default App;
