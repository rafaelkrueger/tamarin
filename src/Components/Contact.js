import '../App.css';
import Facebook from '../Icons/Sociais/facebook.png'
import instagram from '../Icons/Sociais/instagram.png'
import Whatsapp from '../Icons/Sociais/whatsapp.png'
import {React, useState, useEffect} from 'react';
import Api from '../Api';
//importação de pagamentos

function Contact() {

  const [message, setMessage] = useState({
    name:"",
    email:"",
    messagem:""
  })

  return( 
  <>
    <div className="container-fluid" id="contact">
        <div className="contact-content" id="contact-row">
          <div className="content-social">
            <h3>Quer entrar em contato?</h3>
            <br/>
            <img className="contact-icons" src={Facebook}/>
            <img className="contact-icons" src={instagram}/>
            <img className="contact-icons" src={Whatsapp}/>
          </div>
          <div className="col-lg-5" id="content-social-message">                    
              <input onChange={(e)=>{
                setMessage({...message, name:e.target.value})
              }} id="iptName" type="text" class="form-control mb-3" placeholder="Digite seu nome"/>

              <input onChange={(e)=>{
                setMessage({...message, email:e.target.value})
              }} id="email" type="text" class="form-control mb-3" placeholder="nome@email.com.br"/>

              <textarea onChange={(e)=>{
                setMessage({...message, mensagem:e.target.value})
              }} id="iptMessage" className="form-control mb-3" placeholder="Digite sua mensagem"></textarea>

              <button onClick={(e)=>{
                console.log("enviar")
                e.preventDefault()
                Api.post("https://tamarintec.herokuapp.com/set-message", {name:message.name, email:message.email, message:message.messagem})
                  .then(()=>{
                    console.log("Enviado")
                    window.alert("Mensagem Enviada")
                  })
                  .catch((err)=>{
                    console.log(err)
                  })
              }} id="btnSendMessage" className="btn btn-secondary">Enviar mensagem</button>
          </div>
        </div>
    </div>
  </>
  )
}

export default Contact;