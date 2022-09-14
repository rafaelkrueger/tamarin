import '../App.css';
import {GrPersonalComputer} from "react-icons/gr"
import {BiTimer} from "react-icons/bi"
import {GiReceiveMoney} from "react-icons/gi"

function Section() {
  return (
    <>
    <div className="section">
        <div className="section-content">
            <GrPersonalComputer size={"20%"} color="black"/>
            <h4 className="section-title">Desenvolvimento</h4>
            <p classname="section-description" id="section-description-style">Para o desenvolvimento do produto, seu primeiro passo é entrar em contato conosco através do site ou pelas mídias sociais. Após o contato reuniremos dados e informações para o desenvolvimento de seu software.</p>
        </div>
        <div className="section-content">
            <BiTimer size={"20%"} color="black"/>
            <h4 className="section-title">Tempo de Entrega</h4>
            <p classname="section-description" id="section-description-style">Após a etapa de Reunião de dados e informações estipularemos uma data de entrega de nosso produto. Assim então você poderá progredir para proxima fase: Preço de Serviço</p>
        </div>
        <div className="section-content">
            <GiReceiveMoney size={"20%"} color="black"/>
            <h4 className="section-title">Preço de Serviço</h4>
            <p classname="section-description" id="section-description-style">Logo após a etapa de reunião e estipulação do tempo de entrega, lhe informaremos todas nossas categorias de acordos, informando-lhe qual o mais adequado, para assim começarmos a desenvolver.</p>
            <button className='btn btn-dark' style={{marginTop:"5%"}}>Categorias</button>
        </div>

    </div>
    </>
    );
}

export default Section;
