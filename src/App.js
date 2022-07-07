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
      <PageTwo>pagina 2</PageTwo>
      <hr />
      <PageThree>pagina 3</PageThree>;
      <hr />
      <PageFour>pagina 4</PageFour>
    </>
  );
}

export default App;
