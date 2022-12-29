import { React, useState, useEffect, useContext } from "react";
import "./Admin.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Api from "../Api";

function Admin() {
  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    password: "",
    numero: "",
    site: "",
    logo: "",
    usuario: "",
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
  const [empresa, setEmpresa] = useState(null);
  useEffect(() => {
    Api.get("https://tamarintec.herokuapp.com/all")
      .then((res) => {
        setEmpresa(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setEmpresa(err);
      });
  });

  return (
    <>
      <Navbar />
      <div className="admin">
        <div className="row" id="admin-input-group">
          <h3>{newUser.name}</h3>
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Nome Empresa
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, name: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Email
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, email: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Senha
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, password: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Numero
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, numero: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div className="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Website
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, site: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Usuario
              </span>
              <input
                onChange={(e) => {
                  setnewUser({ ...newUser, usuario: e.target.value });
                }}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
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
            <img src={newUser.logo} width="100%" />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              Api.post("https://tamarintec.herokuapp.com/set-user", {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                number: newUser.number,
                site: newUser.site,
                user: newUser.usuario,
                logo: newUser.logo,
              })
                .then(() => {
                  console.log(newUser);
                })
                .catch((err) => {
                  console.log(newUser);
                  console.log(err);
                });
            }}
            id="btnSendMessage"
            className="btn btn-secondary"
          >
            INSERIR USUARIO
          </button>
        </div>
      </div>
      {/*componente futuro*/}

      <table class="table" id="table-users">
        <thead class="thead-dark">
          <tr>
            <th className="row-table" scope="col">
              ID
            </th>
            <th className="row-table" scope="col">
              NAME
            </th>
            <th className="row-table" scope="col">
              Email
            </th>
            <th className="row-table" scope="col">
              Site
            </th>
            <th className="row-table" scope="col">
              DELETAR
            </th>
          </tr>
        </thead>
        <tbody>
          {empresa == undefined
            ? ""
            : empresa.map((list) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{list._id}</th>
                      <td>{list.name}</td>
                      <td>{list.email}</td>
                      <td>{list.site}</td>
                      <td>
                        <button
                          onClick={() => {
                            Api.post(
                              "https://tamarintec.herokuapp.com/delete-user",
                              { id: list._id }
                            )
                              .then((res) => {
                                console.log("Deletado com sucesso");
                              })
                              .catch((err) => {
                                console.log("err");
                              });
                          }}
                          className="btn btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default Admin;
