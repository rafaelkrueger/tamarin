import '../App.css';
import Planning from '../Gifs/planning.gif'
import Development from '../Gifs/development.gif'
import Maintenence from '../Gifs/maintenence.gif'

function Information() {
  return (
    <>
    <div className="information">
        <div className='information-content'>
            <div className='information-card'>
                <img src={Planning} className="information-gif"/>
                <h5 className="information-card-title">Planejamento</h5>
                <hr/>
                <p className="information-card-description">Pode contar com nossa equipe de planejamento para saber o que você precisa e qual a melhor tecnologia para você</p>
            </div>
            <br/>
            <div className='information-card'>
                <img src={Development} className="information-gif"/>
                <h5 className="information-card-title">Aplicações</h5>
                <hr/>
                <p className="information-card-description">Suas aplicações serão seguras e de alta tecnologia! procuramos nos atualizar em melhoria do desenvolvimento das aplicações</p>
            </div>
            <br/>
            <div className='information-card'>
                <img src={Maintenence} className="information-gif"/>
                <h5 className="information-card-title">Manutenção</h5>
                <hr/>
                <p className="information-card-description">Logo após desenvolver suas aplicações, oferecemos a você a manutenção do seu sistema, onde aprimoraremos e deixaremos ele de forma atualizada.</p>
            </div>
        </div>
    </div>
    </>
    );
}

export default Information;
