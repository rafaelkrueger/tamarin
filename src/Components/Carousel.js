import "../App.css";
import CarouselImage from "../Images/carousel.jpg";
import { React, useState, useEffect, useContext } from "react";
import Facebook from "../Icons/Sociais/facebook.png";
import instagram from "../Icons/Sociais/instagram.png";
import Whatsapp from "../Icons/Sociais/whatsapp.png";
import Warning from "../Icons/warning.png";

import Api from "../Api";

function Carousel() {
  const [message, setMessage] = useState({
    name: " ",
    email: " ",
    number: " ",
    messagem: " ",
  });

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={CarouselImage} class="d-block w-100" alt="..." />
            <div
              className="col carousel-caption d-none d-md-block"
              id="carousel-description"
            >
              <h3 className="carousel-title">
                <img
                  src={Warning}
                  style={{ marginRight: "2.5%", marginBottom: "2%" }}
                />
                Começe Imediatamente!
              </h3>
              <input
                id="name"
                onChange={(e) => {
                  setMessage({ ...message, name: e.target.value });
                }}
                type="text"
                class="form-control mb-3"
                placeholder="Digite seu nome"
              />

              <input
                required
                id="email"
                onChange={(e) => {
                  setMessage({ ...message, email: e.target.value });
                }}
                type="text"
                class="form-control mb-3"
                placeholder="nome@email.com.br"
              />
              <hr />

              <input
                required
                id="cellphone"
                onChange={(e) => {
                  setMessage({ ...message, number: e.target.value });
                }}
                type="text"
                class="form-control mb-3"
                placeholder="(99) 9 9999-9999"
              />

              <textarea
                required
                id="iptMessage"
                onChange={(e) => {
                  setMessage({ ...message, messagem: e.target.value });
                }}
                className="form-control mb-3"
                placeholder="Digite sua mensagem"
              ></textarea>

              <div className="carousel-icon-div">
                <img className="carousel-icons" src={Facebook} />
                <a
                  href="https://www.instagram.com/tamarintec.ofc/"
                  target="_blanck"
                >
                  <img className="carousel-icons" src={instagram} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5519998433468&text=Ol%C3%A1!%20Gostaria%20de%20desenvolver%20um%20software%20com%20sua%20equipe."
                  target="_blanck"
                >
                  <img className="carousel-icons" src={Whatsapp} />
                </a>
              </div>

              <button
                onClick={(e) => {
                  console.log("enviar");
                  e.preventDefault();
                  Api.post("https://tamarintec.herokuapp.com/set-message", {
                    name: message.name,
                    email: message.email,
                    number: message.number,
                    message: message.messagem,
                  })
                    .then(() => {
                      console.log("Enviado");
                      window.alert("Mensagem Enviada");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                id="btnSendMessage"
                className="btn btn-secondary"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
