import React, { useState } from "react";
import "./ModalProduto.css";
import Api from "../../Api";
import Load from "../../Gifs/load.gif";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModalProduto({ modal, setModal, empresa, modalContent }) {
  const [loading, setLoading] = useState({
    visibility: "hidden",
    display: "none",
  });
  const [loginText, setloginText] = useState({
    visibility: "visible",
    display: "block",
  });

  const [updatedProduct, setupdatedProduct] = useState({
    image: modalContent.image,
    product: modalContent.product,
    description: modalContent.image,
    value: modalContent.value,
    category: modalContent.category,
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
              }}
              className="modal-close-button"
            >
              X
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <div class="input-group mb-3">
              <input
                name="testImage"
                onChange={async (e) => {
                  const fileReader = new FileReader();
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  setupdatedProduct({ ...updatedProduct, image: base64 });
                }}
                type="file"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

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
                empresa: empresa._id,
                product: updatedProduct.product,
                description: updatedProduct.description,
                category: updatedProduct.category,
                value: updatedProduct.value,
                image:
                  updatedProduct.image == modalContent.image
                    ? modalContent.image
                    : updatedProduct.image,
              })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            id="modal-alter-save-button"
            className="btn btn-success"
          >
            <h5>Atualizar Produto</h5>
            <img
              src={Load}
              style={{
                width: "10%",
                height: "10%",
                marginLeft: "43%",
                visibility: loading.visibility,
                display: loading.display,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduto;
