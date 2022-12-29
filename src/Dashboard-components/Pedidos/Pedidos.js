import React from "react";
import "./Pedidos.css";
import Api from "../../Api";

function Pedidos({ empresa }) {
  return (
    <div className="pedidos">
      <h1 className="pedidos-title">Pedidos Mais Recentes</h1>
      <br />
      <div className="pedidos-wrap">
        {empresa == null || empresa.pedidos.length != 0 ? (
          empresa.pedidos.map((list) => {
            return (
              <>
                <div className="pedido">
                  <h4>Pedido: {list._id}</h4>
                  <hr />
                  <div className="pedidio-body">
                    <table id="pedido-table" className="table table-striped">
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

                      {empresa == null
                        ? ""
                        : list.products[0].map((value) => {
                            return (
                              <>
                                <tbody>
                                  <tr>
                                    <td className="pedido-td">
                                      <img
                                        className="pedido-image"
                                        src={value.image}
                                      />
                                    </td>
                                    <td className="pedido-td">{value._id}</td>
                                    <td className="pedido-td">
                                      {value.product.slice(0, 15)}...
                                    </td>
                                    <td className="pedido-td">
                                      {value.category}
                                    </td>
                                    <td className="pedido-td">
                                      Option do cliente
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                            );
                          })}
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
                      Api.patch("http://localhost:8080/pedido-entregue", {
                        empresa: empresa._id,
                        id: list._id,
                      });
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
  );
}

export default Pedidos;
