import React from "react";
import "./Pedidos.css";
import Api from "../../Api";
import NoProfile from "../../Images/empty-profile.png";

function Pedidos({ empresa }) {
  return (
    <div className="pedidos">
      <h1 className="pedidos-title">
        Pedidos Mais Recentes e Usuários da loja
      </h1>
      <br />
      <div className="row">
        <div className="col" style={{ maxWidth: "40%", zIndex: "1000" }}>
          <h3>Lista De Usuários da Loja</h3>
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

        <div className="col" style={{ maxWidth: "80%" }}>
          <div className="pedidos-wrap">
            <h3>Seus Pedidos Pendentes</h3>
            {empresa !== null ? (
              empresa.pedidos.map((list) => {
                return (
                  <>
                    <div className="pedido">
                      <h4>Pedido: {list._id}</h4>
                      <hr />
                      <div className="pedidio-body">
                        <table
                          id="pedido-table"
                          className="table table-striped"
                        >
                          <thead>
                            <tr>
                              <th scope="col" id="pedido-th">
                                Imagem
                              </th>
                              <th scope="col" id="pedido-th">
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
                          {!empresa
                            ? ""
                            : (() => {
                                for (
                                  let i = 0;
                                  i < list.products[0].length;
                                  i++
                                ) {
                                  return (
                                    <>
                                      <tbody>
                                        <tr>
                                          <td className="pedido-td">
                                            <img
                                              className="pedido-image"
                                              src={list.products[0][i].image}
                                            />
                                          </td>
                                          <td className="pedido-td">
                                            {list.products[0][i]._id}
                                          </td>
                                          <td className="pedido-td">
                                            {list.products[0][i].product}
                                            ...
                                          </td>
                                          <td className="pedido-td">
                                            {list.products[0][i].category}
                                          </td>
                                          <td className="pedido-td">
                                            Option do cliente
                                          </td>
                                        </tr>
                                      </tbody>
                                    </>
                                  );
                                }
                              })()}
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
                          <p>Rua: {list.street} - 132</p>
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
