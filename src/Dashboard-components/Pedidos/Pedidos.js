import React from "react";
import "./Pedidos.css";
import Api from "../../Api";

function Pedidos({ empresa }) {
  return (
    <div className="pedidos">
      <h1 className="pedidos-title">Pedidos Mais Recentes</h1>
      <br />
      <div className="pedidos-wrap">
        {empresa.pedidos.length != 0 ? (
          empresa.pedidos.map((list) => {
            return (
              <div class="card" id="card-id">
                <div class="card-body">
                  <h3 className="card-top-title">Pedido do Cliente</h3>
                  <h5 class="card-title" id="card-pedidos-title">
                    {list.produto == undefined
                      ? ""
                      : list.produto.map((food) => {
                          return (
                            <ul className="pedido-ul">
                              <li>{food}</li>
                            </ul>
                          );
                        })}
                  </h5>
                  <br />
                  <h3 className="card-description">Descrição Do Cliente</h3>
                  <p class="card-text">{list.description}</p>
                </div>
                <hr />
                <div className="costumer-info">
                  <p>
                    <b>Nome: </b>
                    {list.cliente.nome}
                  </p>
                  <p>
                    <b>Rua: </b>
                    {list.cliente.rua}
                  </p>
                  <p>
                    <b>Bairro: </b>
                    {list.cliente.bairro}
                  </p>
                  <p>
                    <b>Forma de Pagamento: </b>
                    {list.cliente.pagamento}
                  </p>
                </div>
                <div id="sent-pedido">
                  <button
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      Api.post(
                        `https://tamarintec.herokuapp.com/delete-pedido`,
                        { empresa: empresa._id, id: list.id }
                      )
                        .then((res) => {
                          console.log(res.data);
                          console.log("Apagado Com Sucesso");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                    class="btn btn-success"
                    id="sent-pedido-button"
                  >
                    PEDIDO ENRTEGUE
                  </button>
                </div>
                <p
                  style={{
                    marginBottom: "1%",
                    color: "green",
                    fontSize: "20pt",
                    textAlign: "center",
                  }}
                >
                  R${list.cliente.valor}
                </p>
                <p
                  style={{
                    marginBottom: "1%",
                    color: "rgba(0,0,0,0.7)",
                    textAlign: "left",
                  }}
                >
                  {list.cliente.horas}
                </p>
              </div>
            );
          })
        ) : (
          <div className="pedidos-empty">
            <h3 style={{ textAlign: "center", color: "rgba(0,0,0,0.4)" }}>
              Não há pedidos no momento!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pedidos;
