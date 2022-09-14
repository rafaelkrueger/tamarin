import '../App.css';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg" id ="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" id="logo-image" href="/">LOGO</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
