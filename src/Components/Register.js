import React, { useState } from "react";
import Api from "../Api";
import Load from "../Gifs/load.gif";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    password: "",
    numero: "",
    site: "",
    logo: "",
    usuario: "",
    instaUsername: "",
    instaPassword: "",
  });

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [loading, setLoading] = useState({
    visibility: "hidden",
    display: "none",
  });
  const [loginText, setloginText] = useState({
    visibility: "visible",
    display: "block",
  });

  return (
    <>
      <div className="register">
        <div className="row">
          <h4 id="register-title">Não tem um ecommerce? Começe Agora!</h4>
          <div className="col">
            <br />
            <div class="input-group mb-3">
              <input
                placeholder="tamarin@dominio.com"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newUser, email: e.target.value });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <input
                placeholder="(99) 9 9999-9999"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newUser, numero: e.target.value });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <input
                placeholder="Sua senha..."
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newUser, password: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col">
            <br />
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                /
              </span>
              <input
                placeholder="tamarin-tech"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newUser, site: e.target.value });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <input
                placeholder="Tamarin Technologies"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setnewUser({ ...newUser, name: e.target.value });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <input
                onChange={async (e) => {
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  console.log(base64);
                  setnewUser({ ...newUser, logo: base64 });
                }}
                type="file"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <br />
          <button
            style={{
              minHeight: "10%",
              maxHeight: "10%",
            }}
            onClick={async (e) => {
              setloginText({
                visibility: "hidden",
                display: "none",
              });

              e.preventDefault();
              setLoading({
                visibility: "visible",
                display: "block",
              });

              await Api.post("/set-user", {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                number: newUser.number,
                site: newUser.site,
                user: newUser.usuario,
                logo: newUser.logo,
                instaUsername: newUser.instaUsername,
                instaPassword: newUser.instaPassword,
              }).then((res) => {
                console.log(res.data);
                navigate(`/admin/` + newUser.site);
              });
            }}
            className="btn btn-large btn-success"
          >
            <h5
              style={{
                visibility: loginText.visibility,
                display: loginText.display,
              }}
            >
              Registre-se Agora!
            </h5>
            <img
              alt="loading"
              src={Load}
              style={{
                width: "5%",
                height: "100%",
                marginLeft: "43%",
                visibility: loading.visibility,
                display: loading.display,
              }}
            />
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Register;
