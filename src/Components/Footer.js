import '../App.css';

function Footer() {
  const notStyledLink = {
    textDecotarion:"none",
    color:"rgba(255,255,255,0.7)",
    textDecorationLine:"none"
  }
  return( 
  <>
  <div class="container-fluid" id="footer-style">
  <div class="row" id="footer-row"><div class="col" style={{padding: "1%"}}>
  <h2 class="footer-titles">Mapa do site</h2>
  <hr/>
  <a href="/" style={notStyledLink}><p>Home</p></a>
  <a href="/nossos-servicos" style={notStyledLink}>
  <p>Nosso Serviço</p></a>
  <a href="/recrutamento" style={notStyledLink}><p>Recrutamento</p></a>
  <a href="/news" style={notStyledLink}><p>Notícias</p></a>
  <a href="/sobre-nos" style={notStyledLink}><p>Sobre Nós</p></a>
  </div>
  <div class="col" style={{padding: "1%"}}>
  <h2 class="footer-titles">Fale Conosco</h2>
  <hr/>
  <a href="/contato" style={notStyledLink}><p>Central de Suporte</p></a>
  <p style={notStyledLink}>WhatsApp</p>
  <p style={notStyledLink}>Facebook</p>
  <p style={notStyledLink}>Instagram</p>
  </div>
  <div class="col" style={{padding: "1%"}}>
  <h2 class="footer-titles">Para empresas</h2>
  <hr/>
  <p style={notStyledLink}>Seja parceiro</p>
  <p style={notStyledLink}>Categorias</p>
  </div>
  </div>
  <hr/>
  <h6 style={{textalign: "center", color: "rgba(255, 255, 255, 0.4)", fontSize: "8pt"}}>Copyright © 2022 Tamarin Technologies | Todos os direitos reservados</h6></div>
  </>
  )
}

export default Footer;