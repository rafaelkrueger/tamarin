import React, { useEffect, useState } from "react";
import "../Produtos.css";
import Api from "../../../Api";

function ProductsTable({ empresa, setModal, modalContent, setmodalContent }) {
  return (
    <>
      <div className="row" id="products-crud">
        <h2
          style={{
            marginTop: "1%",
            marginBottom: "3%",
            borderBottom: "0.5px black solid",
            paddingBottom: "0.9%",
            textAlign: "center",
          }}
          id="table-products-title"
        >
          {empresa === undefined ? "" : empresa.name} - esses são seus produtos!
        </h2>

        {empresa === undefined || empresa.produto.length === 0 ? (
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
                  <thead class="thead-dark" id="products-table">
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
                                <td style={{ maxWidth: "100px" }}>
                                  {window.screen.availWidth < 600
                                    ? list.product.slice(0, 10) + "..."
                                    : list.product}
                                </td>
                                <td>{list.category}</td>
                                <td>{list.value}</td>
                                <td>
                                  <button
                                    onClick={() => {
                                      setModal("hidden");
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
                                    }}
                                    id="delete-product-button"
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
    </>
  );
}

export default ProductsTable;
