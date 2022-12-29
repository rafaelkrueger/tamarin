import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Api from "../../Api";
import ModalProduto from "./ModalProduto";
import ModalCategoria from "./ModalCategoria";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import UndefinedImage from "../../Images/undefined.jpg";

import Load from "../../Gifs/load.gif";

function Produtos({ empresa }) {
  const [category, setCategory] = useState("");
  const [modal, setModal] = useState("hidden");
  const [categoryModal, setCategoryModal] = useState("hidden");

  const [insertLoad, setinsertLoad] = useState({
    visibility: "hidden",
    display: "none",
  });
  const [insertText, setinsertText] = useState({
    visibility: "visible",
    display: "block",
  });

  const [modalContent, setmodalContent] = useState({
    productId: "",
    product: "",
    image: "",
    description: "",
    value: "",
    category: "",
  });

  const [newProduct, setnewProduct] = useState({
    product: "",
    description: "",
    value: 0,
    image: "",
    category: "",
    avaible: 0,
  });

  const [inputnumber, setinputNumber] = useState(0);

  const [options, setOptions] = useState([]);
  const [prototypeOptions, setPrototypeOptions] = useState({
    id: "",
    type: "",
    price: "",
  });
  const addInput = () => {
    setinputNumber(inputnumber + 1);
  };

  const removeInput = () => {
    if (inputnumber > 0) {
      setinputNumber(inputnumber - 1);
    } else {
      console.log(inputnumber);
    }
  };

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
    <div id="cardapio" className="row">
      <div className="col" id="insert-col">
        <h2>INSIRA UM PRODUTO</h2>
        <br />
        <div class="input-group mb-3">
          <input
            name="testImage"
            onChange={async (e) => {
              const fileReader = new FileReader();
              const file = e.target.files[0];
              const base64 = await convertBase64(file);
              setnewProduct({ ...newProduct, image: base64 });
              console.log(newProduct.image);
            }}
            type="file"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <br />
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Nome Produto
            </span>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setnewProduct({ ...newProduct, product: e.target.value });
            }}
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <textarea
            onChange={(e) => {
              setnewProduct({ ...newProduct, description: e.target.value });
            }}
            id="iptMessage"
            className="form-control mb-3"
            placeholder="Digite uma descrição"
          ></textarea>
        </div>
        <br />
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              R$
            </span>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setnewProduct({ ...newProduct, value: e.target.value });
            }}
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Valor (ex: 13.50)"
          />
        </div>
        <br />
        <p className="category-text">
          Selecione uma categoria ( exemplo: Jóias, Camisetas, Acessórios, etc
          ). Adicione uma categoria caso necessário
        </p>
        <hr />
        <br />
        <div className="input-buttons">
          <div class="input-group mb-3">
            <span
              class="input-group-text"
              id="inputGroup-sizing-default"
              onClick={() => {
                setCategoryModal("visible");
              }}
            >
              <button
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0)",
                  border: "0px",
                }}
              >
                <AiOutlinePlusCircle width={100} />
              </button>
            </span>

            <select
              className="select-category"
              style={{ border: "0.1px solid black" }}
              onChange={(e) => {
                setnewProduct({ ...newProduct, category: e.target.value });
              }}
            >
              <option value="">Categoria</option>
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
          </div>
          <div
            style={{
              width: "70%",
              marginLeft: "-15%",
              marginTop: "0%",
              marginBottom: "4%",
            }}
          >
            <p style={{ width: "100%", marginBottom: "-0%" }}>
              Quantidade Disponivel:
            </p>
            <input
              type="number"
              style={{ width: "70%" }}
              onChange={(e) => {
                setnewProduct({ ...newProduct, avaible: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            setinsertText({
              display: "none",
              visibility: "hidden",
            });
            setinsertLoad({
              display: "block",
              visibility: "visible",
            });
            Api.post(`https://tamarintec.herokuapp.com/set-produto`, {
              empresa: empresa._id,
              product: newProduct.product,
              description: newProduct.description,
              category: newProduct.category,
              value: newProduct.value,
              image: newProduct.image,
              avaible: newProduct.avaible,
              options: options,
            })
              .then((res) => {
                setinsertLoad({
                  display: "none",
                  visibility: "hidden",
                });
                setinsertText({
                  display: "block",
                  visibility: "visible",
                });
              })
              .catch((err) => {
                console.log(err.message);
                setinsertLoad({
                  display: "none",
                  visibility: "hidden",
                });
                setinsertText({
                  display: "block",
                  visibility: "visible",
                });
              });
          }}
          id="insert-button"
          className="btn btn-success"
        >
          <p
            style={{
              display: insertText.display,
              visibility: insertText.visibility,
            }}
          >
            Inserir Produto
          </p>
          <img
            src={Load}
            style={{
              width: "15%",
              height: "100%",
              marginLeft: "40%",
              display: insertLoad.display,
              visibility: insertLoad.visibility,
            }}
          />
        </button>
      </div>

      <div className="col" id="insert-category">
        <div id="category-insert-list">
          <img
            src={newProduct.image == "" ? UndefinedImage : newProduct.image}
            className="image-second-column"
          />
          <h4>INSIRA OPÇÕES DO PRODUTO</h4>
          <hr />
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setPrototypeOptions({
                  ...prototypeOptions,
                  type: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              placeholder="Tipo (P, M, G, GG)"
            />
            <input
              id={0}
              onChange={(e) => {
                setPrototypeOptions({
                  ...prototypeOptions,
                  id: e.target.id,
                  price: e.target.value,
                });
              }}
              type="text"
              class="form-control"
              placeholder="Valor adicional (0, 2.5, ...)"
              onBlur={(e) => {
                options.push(prototypeOptions);
              }}
            />
          </div>
          {(() => {
            let inputs = [];
            for (let i = 0; i < inputnumber; i++) {
              inputs.push(
                <>
                  <div class="input-group mb-3">
                    <input
                      onChange={(e) => {
                        setPrototypeOptions({
                          ...prototypeOptions,
                          type: e.target.value,
                        });
                      }}
                      type="text"
                      aria-label="First name"
                      class="form-control"
                      placeholder="Tipo (P, M, G, GG)"
                    />
                    <input
                      id={i + 1}
                      onChange={(e) => {
                        setPrototypeOptions({
                          ...prototypeOptions,
                          id: e.target.id,
                          price: e.target.value,
                        });
                      }}
                      type="text"
                      aria-label="First name"
                      class="form-control"
                      placeholder="Valor adicional (0, 2.5, ...)"
                      onBlur={() => {
                        options.push(prototypeOptions);
                        console.log(options);
                      }}
                    />
                  </div>
                </>
              );
            }
            return inputs;
          })()}
          <div className="remove-add-insert">
            <AiOutlineMinusCircle
              onClick={removeInput}
              color="red"
              size={50}
              className="remove-add-insert-icons"
            />
            <AiOutlinePlusCircle
              onClick={addInput}
              color="green"
              size={50}
              className="remove-add-insert-icons"
            />
          </div>
        </div>
      </div>
      <ModalCategoria
        empresa={empresa}
        categoryModal={categoryModal}
        setCategoryModal={setCategoryModal}
      />
      <div>
        <h2
          style={{
            marginTop: "10%",
            textAlign: "center",
            borderBottom: "0.5px black solid",
            paddingBottom: "0.5%",
          }}
          id="table-products-title"
        >
          {empresa == undefined ? "" : empresa.name} - esses são seus produtos!
        </h2>
        <ModalProduto
          modal={modal}
          setModal={setModal}
          empresa={empresa}
          modalContent={modalContent}
        />
        <div
          className="row"
          style={{ marginBottom: "10%", marginTop: "10%", width: "100%" }}
        >
          {empresa == undefined || empresa.produto.length == 0 ? (
            <div>
              <h3
                id="table-products-title-category"
                style={{ textAlign: "center", color: "rgba(0,0,0,0.4)" }}
              >
                Insira um Produto para começarmos!
              </h3>
            </div>
          ) : (
            empresa.categorias.map((val) => {
              return (
                <>
                  <h3> {val}</h3>
                  <br /> <br />
                  <table
                    class="table table-dark"
                    id="table-users"
                    style={{ marginBottom: "10%" }}
                  >
                    <thead class="thead-dark">
                      <tr>
                        <th className="row-table" scope="col">
                          Produto
                        </th>
                        <th className="row-table" scope="col">
                          Categoria
                        </th>
                        <th className="row-table" scope="col">
                          Valor
                        </th>
                        <th className="row-table" scope="col">
                          DELETAR
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {empresa.produto
                          .filter((list) => {
                            return list.category.includes(val);
                          })
                          .map((list, key) => {
                            return (
                              <>
                                <tr
                                  onClick={() => {
                                    setModal("visible");
                                    setmodalContent({
                                      productId: list._id,
                                      product: list.product,
                                      image: list.image,
                                      description: list.description,
                                      value: list.value,
                                      category: list.category,
                                    });
                                  }}
                                >
                                  <td>{list.product}</td>
                                  <td>{list.category}</td>
                                  <td>{list.value}</td>
                                  <td>
                                    <button
                                      onClick={() => {
                                        Api.post(
                                          `https://tamarintec.herokuapp.com/delete-produto`,
                                          {
                                            empresa: empresa._id,
                                            nomeProduto: list.product,
                                          }
                                        )
                                          .then((res) => {
                                            console.log(res.data);
                                          })
                                          .catch((err) => {
                                            console.log(err);
                                          });
                                        setModal("hidden");
                                      }}
                                      className="btn btn-danger"
                                    >
                                      DELETAR PRODUTO
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </>
                    </tbody>
                  </table>
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Produtos;
