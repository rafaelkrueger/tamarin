import React, { useEffect, useState } from "react";
import "./Produtos.css";
import Api from "../../Api";
import ModalProduto from "./ModalProduto";
import ModalCategoria from "./ModalCategoria";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import UndefinedImage from "../../Images/undefined.jpg";

import Load from "../../Gifs/load.gif";
import InsertProducts from "./insertProducts.js/insertProducts";
import Cupom from "./cupom/cupomSection";
import ProductsTable from "./productsTable/productsTable";

function Produtos({ empresa, dashboard }) {
  const [modal, setModal] = useState("hidden");
  const [categoryModal, setCategoryModal] = useState("hidden");

  const [modalContent, setmodalContent] = useState({
    productId: "",
    product: "",
    image: "",
    description: "",
    value: "",
    category: "",
  });

  return (
    <div id="cardapio" className="row">
      <div>
        <ModalProduto
          modal={modal}
          setModal={setModal}
          empresa={empresa}
          modalContent={modalContent}
        />
        <ModalCategoria
          empresa={empresa}
          categoryModal={categoryModal}
          setCategoryModal={setCategoryModal}
        />
      </div>
      {dashboard === 11 ? (
        <>
          <InsertProducts
            empresa={empresa}
            categoryModal={categoryModal}
            setCategoryModal={setCategoryModal}
          />
        </>
      ) : (
        ""
      )}{" "}
      {dashboard === 12 ? (
        <div className="row">
          <Cupom empresa={empresa} />
        </div>
      ) : (
        ""
      )}
      {dashboard === 13 ? (
        <>
          <div className="row">
            <ProductsTable
              empresa={empresa}
              setModal={setModal}
              modalContent={modalContent}
              setmodalContent={setmodalContent}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Produtos;
