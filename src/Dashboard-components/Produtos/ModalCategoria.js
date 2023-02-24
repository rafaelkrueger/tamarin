import React, { useEffect, useState } from "react";
import "./ModalCategory.css";
import Api from "../../Api";

function ModalCategoria({ empresa, categoryModal, setCategoryModal }) {
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="modal-category" style={{ visibility: categoryModal }}>
        <div className="modal-category-content">
          <div className="modal-category-header">
            <h6
              id="modal-category-close"
              onClick={() => {
                setCategoryModal("hidden");
              }}
              style={{ background: "white", borderRadius: 20, padding: 4 }}
            >
              X
            </h6>
          </div>
          <hr />
          <div className="row" id="modal-content-insert">
            <div className="col">
              <h4 className="insert-category-title">Insira uma Categoria</h4>

              <input
                type="text"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                class="form-control"
                placeholder="Categoria (ex: Camisetas, Jóias, Acessórios...)"
              />
              <br />
              <p style={{ color: "rgba(0,0,0,0.4)" }}>
                A categoria inserida será utilizada para organizar os produtos
                em suas devidas áreas (Area A, Area B, ...)
              </p>
              <button
                className="btn btn-success"
                id="insert-category-button"
                onClick={() => {
                  Api.post(`https://tamarintec.herokuapp.com/set-categoria`, {
                    empresa: empresa._id,
                    category: category,
                  })
                    .then((res) => {
                      console.log(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                INSERIR CATEGORIA
              </button>
            </div>
            <div className="col" id="list-categories">
              <h4 className="category-delete">Suas Categorias:</h4>
              <table className="table table-light" id="category-table">
                <tbody>
                  {empresa == undefined ? (
                    <h3>Você não tem categorias ainda...</h3>
                  ) : (
                    empresa.categorias.map((list, key) => {
                      return (
                        <>
                          <tr>
                            <td className="modal-categories-element-td">
                              {list}
                            </td>
                            <td className="modal-categories-element-td">
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  Api.post(
                                    `https://tamarintec.herokuapp.com/delete-categoria`,
                                    {
                                      empresa: empresa._id,
                                      category: list,
                                    }
                                  )
                                    .then((res) => {
                                      console.log(res.data);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                DELETAR
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCategoria;
