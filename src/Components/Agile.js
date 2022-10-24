import "../App.css";
import { Link } from "react-router-dom";
import AgileImg from "../Images/agile.png";
import Prototype from "../Images/prototipo.png";
import PrototypeMobile from "../Images/prototype.jpg";
import Slider from "react-slick";

function Agile() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  return (
    <>
      <div className="agile">
        <div className="row" id="agile-section">
          <div className="col" id="agile-slider">
            <Slider {...settings}>
              <div>
                <img src={Prototype} className="img-slider" />
              </div>
              <div>
                <img src={PrototypeMobile} className="img-slider" />
              </div>
              <div>
                <img src={Prototype} className="img-slider" />
              </div>
            </Slider>
          </div>
          <div className="col" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
              <h4 className="agile-title">Desenvolvimento do Software</h4>
              <h6 className="agile-sub-title">
                Software Ágil de Facil Manutenção, Do jeito que você precisa
              </h6>
              <hr />
              <p className="agile-text">
                A maioria dos métodos ágeis compartilha a ênfase no
                Desenvolvimento iterativo e incremental para a construção de
                versões implantadas do software em curtos períodos de tempo.
                Métodos ágeis diferem dos métodos iterativos porque seus
                períodos de tempo são medidos em semanas, ao invés de meses, e a
                realização é efetuada de uma maneira altamente colaborativa.
                estendendo-se a tudo. Desenvolvimento iterativo e incremental
                para a construção de versões implantadas do software em curtos
                períodos.
              </p>
              <p className="agile-text">
                A maioria dos métodos ágeis compartilha a ênfase no
                Desenvolvimento iterativo e incremental para a construção de
                versões implantadas do software em curtos períodos de tempo.
                Métodos ágeis diferem dos métodos iterativos porque seus
                períodos de tempo são medidos em semanas, ao invés de meses, e a
                realização é efetuada de uma maneira altamente colaborativa.
                estendendo-se a tudo. Desenvolvimento iterativo e incremental
                para a construção de versões.
              </p>
              <p className="agile-text">
                Com as mesmas plataformas utilizadas no Vale do Silício é
                possível transformar o alcance do seu negócio. Você encontra
                aqui o melhor para sua empresa, fazendo acontecer o seu negócio
                digital! Não perca essa oportunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agile;
