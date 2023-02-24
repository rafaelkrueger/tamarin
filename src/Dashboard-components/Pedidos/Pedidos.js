import React, { useEffect, useState } from "react";
import "./Pedidos.css";
import Api from "../../Api";
import NoProfile from "../../Images/empty-profile.png";

function Pedidos({ empresa }) {
  const selectedOption = (option) => {
    for (let i = 0; i < option.length; i++) {
      if (option[i].selected)
        return (
          <>
            <td>{option[i].type}</td>
          </>
        );
    }
  };
  const [trackcode, setTrackCode] = useState("");
  return (
    <div className="pedidos">
      <h1 className="pedidos-title">
        Pedidos Mais Recentes e Usuários da loja
      </h1>
      <br />
      <div className="row" id="pedidos-clients">
        <div className="col" style={{ maxWidth: "40%", zIndex: "1000" }}>
          <h3 id="pedidos-user-title">Lista De Usuários da Loja</h3>
          <div className="users-table" style={{ maxWidth: "10%" }}>
            <table
              class="table table-striped"
              style={{
                border: "0.01px rgba(0,0,0,0.2) solid",
              }}
            >
              <thead>
                <tr>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Delete User</th>
                </tr>
              </thead>
              <tbody>
                {empresa === null
                  ? ""
                  : empresa.users.map((list) => {
                      return (
                        <>
                          <tr>
                            <img
                              src={
                                list.profileImage
                                  ? list.profileImage
                                  : NoProfile
                              }
                              className="profile-image"
                            />
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.number}</td>
                            <td>
                              <button
                                onClick={() => {
                                  Api.patch(
                                    "https://tamarintec.herokuapp.com/delete-costumer",
                                    { empresa: empresa._id, id: list._id }
                                  );
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
          </div>
        </div>

        <div className="col" style={{ maxWidth: "80%" }} id="pedidos-recent">
          <div className="pedidos-wrap">
            <h3 id="pedidos-pedidos-title">Seus Pedidos Pendentes</h3>
            {empresa !== null ? (
              empresa?.pedidos?.map((list) => {
                return (
                  <>
                    <div className="pedido">
                      <h4>Pedido: {list._id}</h4>
                      <hr />
                      <div className="pedidio-body">
                        <table
                          id="pedido-table"
                          className="table table-striped table-light"
                        >
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                id="pedido-th"
                                style={{ width: "20%" }}
                              >
                                Imagem
                              </th>
                              <th
                                scope="col"
                                id="pedido-th"
                                style={{ maxWidth: "10%", minWidth: "10%" }}
                              >
                                ID do Produto
                              </th>
                              <th scope="col" id="pedido-th">
                                Produto
                              </th>
                              <th scope="col" id="pedido-th">
                                Categoria
                              </th>
                              <th scope="col" id="pedido-th">
                                Opção
                              </th>
                            </tr>
                          </thead>
                          <tbody style={{ color: "black" }}>
                            {empresa !== null
                              ? list?.products.map((val, index) => {
                                  const row = [];
                                  for (let i = 0; i < val.length; i++) {
                                    row.push(
                                      <>
                                        <tr>
                                          <td>
                                            <img
                                              src={val[i].image}
                                              style={{ width: "100%" }}
                                            />
                                          </td>
                                          <td
                                            style={{
                                              maxWidth: "10%",
                                              minWidth: "10%",
                                            }}
                                          >
                                            {val[i]._id.slice(0, 20)}...
                                          </td>
                                          <td>
                                            {val[i].product.slice(0, 20)}...
                                          </td>
                                          <td>{val[i].category}</td>
                                          <td style={{ marginLeft: "5%" }}>
                                            {selectedOption(val[i].options)}
                                          </td>
                                        </tr>
                                      </>
                                    );
                                  }
                                  return row;
                                })
                              : ""}
                          </tbody>
                        </table>
                      </div>

                      <div className="pedido-header">
                        <div className="col">
                          <h6>Nome: {list.name}</h6>
                          <h6>Email: {list.email}</h6>
                        </div>
                        <div className="col">
                          <h6>Número: {list.number}</h6>
                          <h6>CPF: {list.cpf}</h6>
                        </div>
                      </div>
                      <hr />
                      <div className="pedidio-footer">
                        <div className="col">
                          <p>CEP: {list.cep}</p>
                          <p>Estado: {list.state}</p>
                        </div>
                        <div className="col">
                          <p>Cidade: {list.city}</p>
                          <p>
                            Rua: {list.street} - {list.streetNumber}
                          </p>
                        </div>
                      </div>
                      <div className="pedido-send-track-code">
                        <div className="col">
                          <input
                            className="form"
                            placeholder="Codigo de Rastreio"
                            style={{ textAlign: "center" }}
                            onChange={(e) => {
                              setTrackCode(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col">
                          <button
                            onClick={() => {
                              Api.post("/pedido-set-trackcode", {
                                empresa: empresa._id,
                                id: list._id,
                                trackcode: trackcode,
                              });
                            }}
                            className="btn btn-warning"
                          >
                            Enviar Código
                          </button>
                        </div>
                      </div>
                      <button
                        className="btn btn-large btn-success"
                        id="pedido-confirm-button"
                        onClick={() => {
                          Api.patch(
                            "https://tamarintec.herokuapp.com/pedido-entregue",
                            {
                              empresa: empresa._id,
                              id: list._id,
                            }
                          );
                        }}
                      >
                        Confirmar Entrega
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="pedidos-empty">
                <h3 style={{ color: "rgba(0,0,0,0.4)" }}>
                  Não há pedidos no momento!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
