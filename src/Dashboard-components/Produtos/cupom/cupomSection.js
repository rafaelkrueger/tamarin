import React, { useEffect, useState } from "react";
import "../Produtos.css";
import Api from "../../../Api";

function Cupom({ empresa }) {
  const [cupom, setCupom] = useState({
    code: "",
    percentage: 0,
    avaible: 15,
  });
  return (
    <>
      <div className="cupom-section">
        <h3>Insira ou Remova Cupons de desconto</h3>
        <hr />
        <div className="row" id="cupom-section-content">
          <div className="col">
            <div className="row" id="cupom-section-inserting">
              <br />
              <div className="col" id="cupom-section-code">
                <input
                  type="text"
                  maxLength={11}
                  placeholder="Codigo Aleatorio"
                  style={{ marginRight: "10%" }}
                  onChange={(e) => {
                    setCupom({ ...cupom, code: e.target.value });
                  }}
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="15%"
                  id="cupom-section-code-percentage"
                  style={{
                    minWidth: "80%",
                    maxWidth: "80%",
                  }}
                  onChange={(e) => {
                    setCupom({ ...cupom, percentage: e.target.value });
                  }}
                />
              </div>
              <div className="col" id="cupom-section-insert">
                <input
                  id="cupom-section-insert-element-input"
                  type="number"
                  placeholder="Quantidade de Cupoms"
                  onChange={(e) => {
                    setCupom({ ...cupom, avaible: e.target.value });
                  }}
                />
                <button
                  id="cupom-section-insert-element-button"
                  onClick={() => {
                    Api.post("/set-cupom", {
                      empresa: empresa._id,
                      code: cupom.code,
                      percentage: cupom.percentage * 10,
                      avaible: cupom.avaible,
                    });
                  }}
                  style={{ marginLeft: "8%", marginTop: "10%" }}
                  className="btn btn-success"
                >
                  Inserir Cupom Novo
                </button>
              </div>

              <br />
            </div>
          </div>
          <div className="col">
            <table className="table table-dark">
              <thead class="thead-dark">
                <tr>
                  <th
                    className="row-table"
                    scope="col"
                    style={{ textAlign: "center" }}
                  >
                    Codigo
                  </th>
                  <th
                    className="row-table"
                    scope="col"
                    style={{ textAlign: "center" }}
                  >
                    Desconto
                  </th>
                  <th className="row-table" scope="col">
                    Disponíveis
                  </th>
                  <th className="row-table" scope="col">
                    DELETAR
                  </th>
                </tr>
              </thead>
              <tbody>
                {empresa !== null
                  ? empresa.cupom.map((list) => {
                      return (
                        <>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              {list?.code}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {list?.percentage}%
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {list?.avaible}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <button
                                onClick={() => {
                                  Api.patch("/remove-cupom", {
                                    empresa: empresa._id,
                                    id: list._id,
                                  });
                                }}
                                className="btn btn-danger"
                              >
                                Deletar
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cupom;
