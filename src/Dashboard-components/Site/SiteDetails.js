import React, { useState, useEffect } from "react";
import Star6 from "../../Images/stars/star-6.png";
import { Link, useParams } from "react-router-dom";
import { BsCart4, BsHeartFill } from "react-icons/bs";
import Api from "../../Api";
import "./SiteDetails.css";

function SiteDetails({ empresa }) {
  const [website, setWebsite] = useState({
    websiteDetailedBackground: empresa.websiteDetailedBackground,
    websiteDetailedFont: empresa.websiteDetailedFont,
    websiteDetailedTitleFont: empresa.websiteDetailedTitleFont,
    websiteDetailedDescriptionFont: empresa.websiteDetailedDescriptionFont,
    websiteDetailedOptionsColor: empresa.websiteDetailedOptionsColor,
    websiteDetailedOptionsFont: empresa.websiteDetailedOptionsFont,
    websiteDetailedDiscountColor: empresa.websiteDetailedDiscountColor,
    websiteDetailedPriceColor: empresa.websiteDetailedPriceColor,
    websiteDetailedHeartColor: empresa.websiteDetailedHeartColor,
    websiteDetailedButtonBuy: empresa.websiteDetailedButtonBuy,
    websiteDetailedButtonFontBuy: empresa.websiteDetailedButtonFontBuy,
    websiteDetailedButtonCart: empresa.websiteDetailedButtonCart,
    websiteDetailedButtonFontCart: empresa.websiteDetailedButtonFontCart,
  });

  return (
    <>
      <div className="site-cards">
        <div className="row">
          <div className="row">
            <div
              className="col"
              id="detailed-product-columns-2"
              style={{
                maxWidth: "40%",
                marginRight: "5%",
                background: website.websiteDetailedBackground,
                color: website.websiteDetailedFont,
              }}
            >
              <h3
                id="detailed-product-title"
                style={{
                  color: website.websiteDetailedTitleFont,
                }}
              >
                {empresa.produto.length > 0
                  ? empresa.produto[0].product
                  : "Loading..."}
              </h3>
              <hr />
              <p
                id="detailed-product-description"
                style={{
                  color: website.websiteDetailedDescriptionFont,
                }}
              >
                {empresa.produto.length > 0
                  ? empresa.produto[0].description
                  : "Loading..."}
              </p>
              <div className="detailed-product-evaluation">
                <div className="detailed-product-evaluation-image">
                  <img
                    src={Star6}
                    className="detailed-product-evaluation-image-element"
                  />
                </div>
                <div className="detailed-product-evaluation-quantity">
                  <p>Produtos Vendidos: 20 </p>
                </div>
              </div>
              <br />
              <h6 id="detailed-options-title">Opções:</h6>
              <div
                className="detailed-product-options"
                style={{
                  color: website.websiteDetailedOptionsFont,
                  background: website.websiteDetailedOptionsColor,
                }}
              >
                {empresa !== null && empresa.produto[0] !== undefined
                  ? empresa.produto[0].options.map((list) => {
                      return (
                        <div
                          className="detailed-product-card"
                          id={`detailed-product-card-` + list.id}
                          style={{ color: "black" }}
                          onClick={(e) => {
                            for (
                              let i = 0;
                              i < empresa.produto[0].options.length;
                              i++
                            ) {
                              window.document.getElementById(
                                `detailed-product-card-` + i
                              ).style.boxShadow = "0px 0px 0px rgba(0,0,0,0.3)";
                              empresa.produto[0].options[i].selected = false;
                            }
                            window.document.getElementById(
                              `detailed-product-card-` + list.id
                            ).style.boxShadow = "1px 1px 20px rgba(0,0,0,0.3)";
                            list.selected = true;
                          }}
                        >
                          <p
                            id="detailed-product-type"
                            style={{
                              color: website.websiteDetailedOptionsFont,
                            }}
                          >
                            {list.type == undefined ? "" : list.type}
                          </p>
                        </div>
                      );
                    })
                  : "Loading..."}
              </div>
              <br />
              <br />
              <div className="detailed-product-quantity">
                <div className="detailed-product-quantity-quantities">
                  <p className="detailed-product-quantity-title">Quantidade:</p>
                  <input
                    type="number"
                    className="detailed-product-quantity-quantities-input"
                    min={1}
                    max={10}
                    placeholder="1"
                  />
                </div>
                <div className="detailed-product-quantity-price">
                  <div className="row">
                    <div className="col">
                      <p className="detailed-product-quantity-title">
                        Original:
                      </p>
                      <h5
                        className="detailed-original-value"
                        style={{
                          color: website.websiteDetailedDiscountColor,
                        }}
                      >
                        <s>
                          R$
                          {empresa.produto[0].value}
                        </s>
                      </h5>
                    </div>
                    <div className="col">
                      <p className="detailed-product-quantity-title">Total:</p>
                      <h5
                        style={{
                          color: website.websiteDetailedPriceColor,
                        }}
                      >
                        R$
                        {empresa.produto[0].value}
                      </h5>
                    </div>
                    <div className="col">
                      <p className="detailed-product-quantity-title">
                        Wishlist:
                      </p>
                      <BsHeartFill color={website.websiteDetailedHeartColor} />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="detailed-product-button">
                <div className="detailed-button-row">
                  <div
                    className="col"
                    id="detailed-button-col-1"
                    style={{
                      background: website.websiteDetailedButtonBuy,
                    }}
                  >
                    <Link
                      id="detailed-product-button-element"
                      className="btn btn-large "
                      style={{
                        color: website.websiteDetailedButtonFontBuy,
                      }}
                    >
                      COMPRAR
                    </Link>
                  </div>
                  <div className="col" id="detailed-button-col-2">
                    <button
                      className="btn"
                      style={{
                        background: website.websiteDetailedButtonCart,
                        color: website.websiteDetailedButtonFontCart,
                      }}
                    >
                      <BsCart4 color={website.websiteDetailedButtonFontCart} />+
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" style={{ maxWidth: "25%" }}>
              <p>Fundo De Detalhes</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedBackground}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedBackground: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Fonte De Detalhes</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedFont}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedFont: e.target.value,
                    });
                  }}
                />
              </div>

              <p>Fonte Título de Detalhes</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedTitleFont}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedTitleFont: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Fonte Descrição de Detalhes</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedDescriptionFont}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedDescriptionFont: e.target.value,
                    });
                  }}
                />
              </div>

              <p>Cor em Options</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedOptionsColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedOptionsColor: e.target.value,
                    });
                  }}
                />
              </div>

              <p>Cor fonte em options</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedOptionsFont}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedOptionsFont: e.target.value,
                    });
                  }}
                />
              </div>

              <p>Cor de Desconto</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedDiscountColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedDiscountColor: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col" style={{ maxWidth: "25%" }}>
              <p>Cor de Preço</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedPriceColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedPriceColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Off Wishlist</p>

              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedHeartColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedHeartColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Cor botão de Compra</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedButtonBuy}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedButtonBuy: e.target.value,
                    });
                  }}
                />
              </div>

              <p>Cor fonte botão de Compra</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedButtonFontBuy}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedButtonFontBuy: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Cor botão do Carrinho</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedButtonCart}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedButtonCart: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Cor fonte botão do Carrinho</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDetailedButtonFontCart}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDetailedButtonFontCart: e.target.value,
                    });
                  }}
                />
              </div>
              <br />
              <div>
                <button
                  className="btn btn-large btn-success"
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-details-style",
                      {
                        empresa: empresa._id,
                        websiteDetailedBackground:
                          website.websiteDetailedBackground,
                        websiteDetailedFont: website.websiteDetailedFont,
                        websiteDetailedTitleFont:
                          website.websiteDetailedTitleFont,
                        websiteDetailedDescriptionFont:
                          website.websiteDetailedDescriptionFont,
                        websiteDetailedOptionsColor:
                          website.websiteDetailedOptionsColor,
                        websiteDetailedOptionsFont:
                          website.websiteDetailedOptionsFont,
                        websiteDetailedDiscountColor:
                          website.websiteDetailedDiscountColor,
                        websiteDetailedPriceColor:
                          website.websiteDetailedPriceColor,
                        websiteDetailedHeartColor:
                          website.websiteDetailedHeartColor,
                        websiteDetailedButtonBuy:
                          website.websiteDetailedButtonBuy,
                        websiteDetailedButtonFontBuy:
                          website.websiteDetailedButtonFontBuy,
                        websiteDetailedButtonCart:
                          website.websiteDetailedButtonCart,
                        websiteDetailedButtonFontCart:
                          website.websiteDetailedButtonFontCart,
                      }
                    )
                      .then(() => {
                        window.alert("Details alterado com sucesso");
                      })
                      .catch(() => {
                        window.alert("Details não alterado ");
                      });
                  }}
                >
                  Alterar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteDetails;
