import React, { useEffect, useState } from "react";
import Warning from "../../Icons/warning.png";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdPassword } from "react-icons/md";
import Api from "../../Api";
import "./Configuration.css";

function Configurations({ empresa }) {
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
  const [configuration, setConfiguration] = useState({
    logo: empresa.logo,
    name: empresa.name,
    email: empresa.email,
    password: empresa.password,
  });
  return (
    <div
      id="configurations"
      style={{ marginLeft: "350px", marginTop: "100px" }}
    >
      <div className="configuration-profile-image">
        <div className="row">
          <div className="col">
            <img
              src={configuration.logo}
              id="configuration-profile-image-element"
            />
            <div className="form-group">
              <input
                type="file"
                onChange={async (e) => {
                  const fileReader = new FileReader();
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  setConfiguration({ ...configuration, logo: base64 });
                }}
                id="configuration-profile-input-element"
              />
              <button
                onClick={() => {
                  Api.patch("http://localhost:8080/update-user", {
                    id: empresa._id,
                    logo: configuration.logo,
                    name: configuration.name,
                    email: configuration.email,
                    password: configuration.password,
                  });
                }}
                className="btn btn-large btn-success"
                id="configuration-profile-input-button"
              >
                Alterar
              </button>
            </div>
          </div>
          <div className="col">
            <h3 className="configuration-profile-title">
              Cuidado Ao Editar Seus Dados
            </h3>

            <hr />
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                  style={{ height: "100%" }}
                >
                  <CgProfile />
                </span>
              </div>
              <input
                type="text"
                onChange={(e) => {
                  setConfiguration({ ...configuration, name: e.target.value });
                }}
                class="form-control"
              />
              <button
                onClick={() => {
                  Api.patch("http://localhost:8080/update-user", {
                    id: empresa._id,
                    logo: configuration.logo,
                    name: configuration.name,
                    email: configuration.email,
                    password: configuration.password,
                  });
                }}
                className="btn btn-success"
              >
                Alterar
              </button>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                  style={{ height: "100%" }}
                >
                  <AiOutlineMail />
                </span>
              </div>
              <input
                type="email"
                onChange={(e) => {
                  setConfiguration({ ...configuration, email: e.target.value });
                }}
                class="form-control"
              />
              <button
                onClick={() => {
                  Api.patch("http://localhost:8080/update-user", {
                    id: empresa._id,
                    logo: configuration.logo,
                    name: configuration.name,
                    email: configuration.email,
                    password: configuration.password,
                  });
                }}
                className="btn btn-success"
              >
                Alterar
              </button>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  style={{ height: "100%" }}
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  <MdPassword />
                </span>
              </div>
              <input
                type="password"
                onChange={(e) => {
                  setConfiguration({
                    ...configuration,
                    password: e.target.value,
                  });
                }}
                class="form-control"
              />
              <button
                onClick={() => {
                  Api.patch("http://localhost:8080/update-user", {
                    id: empresa._id,
                    logo: configuration.logo,
                    name: configuration.name,
                    email: configuration.email,
                    password: configuration.password,
                  });
                }}
                className="btn btn-success"
              >
                Alterar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurations;
