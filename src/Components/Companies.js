import '../App.css';
import Facebook from '../Images/facebook-png.png'
import Google from '../Images/google-png.png'
import Amazon from '../Images/amazon-png.png'
import Ifood from '../Images/ifood.jpeg'
import Paypal from '../Images/paypal.png'
import Netflix from '../Images/netflix.png'
import Linkedin from '../Images/linkedin.png';
import Uber from '../Images/uber.png'
import {BsFileEarmarkCode} from "react-icons/bs"


function Companies() {
  return (
    <>
    <div className="companies">
        <div className='companies-information'>
            <h4 className='companies-title'>Tecnologias de ultima geração</h4>
            <h5 className='companies-subtitle'>A melhor texnologia dos gigantes direto para sua empresa</h5>
        </div>
        <div className='companies-images'>
            <img src={Facebook} className="companies-img"/>
            <img src={Netflix} className="companies-img"/>
            <img src={Google} className="companies-img"/>
            <img src={Amazon} className="companies-img"/>
            <img src={Paypal} className="companies-img"/>
            <img src={Linkedin} className="companies-img"/>
            <img src={Uber} className="companies-img"/>
            <img src={Ifood} className="companies-img"/>
        </div>
    </div>
    </>
    );
}

export default Companies;
