import {useState} from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'


function Navbar() {

  const [screen, setScreen] = useState(window.outerWidth)
  const [navbar, setNavbar] = useState("")


  return (
    <>
        <nav class="navbar navbar-expand-lg" id ="navbar">
      <div class="container-fluid">
      <Link class="navbar-brand" style={{color:"white"}} to="/" onClick={(e)=>{
        e.preventDefault()
      }}>{screen > 600?<h3>Logo</h3>:<AiOutlineMenu color="white" onClick={(e)=>{
        e.preventDefault()
        if(navbar == "responsive"){
          setNavbar("")
        }else{
          setNavbar("responsive")
        }
      }} />}</Link>
        <div class="collapse navbar-collapse" id={`navbar-content-${navbar}`}>
          <div class="navbar-nav" id="nav-links">
            <Link to="/" id="nav-link-home" class="nav-link active" aria-current="page">Home</Link>
            <Link to="/nosso-servico" id="nav-link-valores" class="nav-link">Nossos Serviços</Link>
            <Link to="/recrutamento" id="nav-link-valores" class="nav-link"><s>Recrutamento</s></Link>
            <Link to="/news" id="nav-link-sobre" class="nav-link">Notícias</Link>
            <Link to="/sobre-nos" id="nav-link-sobre" class="nav-link" ><s>Sobre Nós</s></Link>
            <Link to="/login" id="nav-link-sobre" class="nav-link" >Login</Link>
          </div>
        </div>
      </div>
    </nav>
    </>
    );
}

export default Navbar;
