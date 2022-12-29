import React, { useState } from "react";
import "./ModalProduto.css";
import Api from "../../Api";
import Load from "../../Gifs/load.gif";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModalProduto({ modal, setModal, empresa, modalContent }) {
  const [updatedProduct, setupdatedProduct] = useState({
    productId: modalContent.productId,
    product: modalContent.product,
    image: modalContent.image,
    description: modalContent.image,
    value: modalContent.value,
    category: modalContent.category,
  });

  return (
    <div className="modal-produto" style={{ visibility: modal }}>
      <div className="modal-produto-content">
        <div className="modal-produto-header">
          <div>
            <h3 className="modal-title-button">Altere Seu Produto</h3>
          </div>
          <div>
            <button
              onClick={() => {
                setModal("hidden");
                setupdatedProduct({});
              }}
              className="modal-close-button"
            >
              X
            </button>
          </div>
        </div>
        <div className="row">
          <h2>{modalContent.product}</h2>
          <div className="col">
            <hr />
            <div class="input-group mb-3">
              <input
                value={updatedProduct.product}
                type="text"
                class="form-control"
                placeholder="Produto..."
                onChange={(e) => {
                  setupdatedProduct({
                    ...updatedProduct,
                    product: e.target.value,
                  });
                }}
              />
            </div>
            <div class="input-group mb-3">
              <textarea
                placeholder="Descrição do Produto..."
                value={updatedProduct.description}
                type="text"
                class="form-control"
                rows={5}
                onChange={(e) => {
                  setupdatedProduct({
                    ...updatedProduct,
                    description: e.target.value,
                  });
                }}
              ></textarea>
            </div>
          </div>
          <div className="col">
            <hr />
            <div className="row">
              <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  R$
                </span>
                <input
                  value={updatedProduct.value}
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setupdatedProduct({
                      ...updatedProduct,
                      value: e.target.value,
                    });
                  }}
                />
              </div>
              <select
                onChange={(e) => {
                  setupdatedProduct({
                    ...updatedProduct,
                    category: e.target.value,
                  });
                }}
                className="select-category-modal"
              >
                <option value={updatedProduct.category}>
                  {updatedProduct.category}
                </option>
                {empresa == undefined
                  ? ""
                  : empresa.categorias.map((list) => {
                      return (
                        <>
                          <option value={list}>{list}</option>
                        </>
                      );
                    })}
              </select>
              <p id="modal-info-text">
                Cuidado ao clicar no botão todas alterações serão confirmadas
                instantaneamente e diretamente salvas no seu registro. Complete
                todas informações antes de alterar
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              Api.patch("https://tamarintec.herokuapp.com/update-produto", {
                productId: modalContent.productId,
                product: updatedProduct.product,
                description: updatedProduct.description,
                category: updatedProduct.category,
                value: updatedProduct.value,
              })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
              setTimeout(() => {
                setModal("hidden");
              }, 2000);
              window.alert("Produto Alterado com sucesso!");
              setupdatedProduct({
                product: "",
                description: "",
                category: "",
                value: "",
              });
            }}
            id="modal-alter-save-button"
            className="btn btn-success"
          >
            <h5>Atualizar Produto</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduto;
