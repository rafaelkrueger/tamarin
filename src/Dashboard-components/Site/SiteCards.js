import React, { useState, useEffect } from "react";
import Api from "../../Api";
import "./SiteCards.css";

function SiteCards({ empresa }) {
  const [website, setWebsite] = useState({
    websiteCardBackgroundColor: empresa.websiteCardBackgroundColor,
    websiteCardFontColor: empresa.websiteCardFontColor,
    websiteDiscountColor: empresa.websiteDiscountColor,
    websitePriceColor: empresa.websitePriceColor,
    websiteHeartTagColor: empresa.websiteHeartTagColor,
    websiteDiscountTagColor: empresa.websiteDiscountTagColor,
    websiteButton: empresa.websiteButton,
    websiteButtonColor: empresa.websiteButtonColor,
  });

  return (
    <div className="site-cards">
      <h3>Escolha o Estilo de apresentação de Produtos</h3>
      <hr />
      <div className="row">
        <div className="col" id="card-view-style">
          <div
            className="card-swiper"
            id="card-swiper"
            style={{ background: website.websiteCardBackgroundColor }}
          >
            <img
              src={empresa.produto[0].image}
              className="card-swiper-image"
              id="product-slider-swiper-image"
            />
            <div className="card-swiper-footer">
              <h5
                className="card-swiper-title"
                style={{ color: website.websiteCardFontColor }}
              >
                {empresa.produto[0].product}
              </h5>
              <hr />
              <div className="row">
                <div className="col">
                  <h5
                    className="card-swiper-price"
                    style={{
                      fontSize: "20pt",
                      color: website.websiteDiscountColor,
                    }}
                  >
                    <s>R${empresa.produto[0].value.toFixed(2)}</s>
                  </h5>
                  <h5
                    className="card-swiper-price"
                    style={{
                      color: website.websitePriceColor,
                      fontSize: "14pt",
                    }}
                  >
                    R${empresa.produto[0].value.toFixed(2)}
                  </h5>
                </div>
                <div className="col">
                  <button
                    className="btn btn-large"
                    style={{
                      color: website.websiteCardFontColor,
                      background: website.websiteButton,
                    }}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="card-set-style">
          <div className="row">
            <div className="col">
              <p>Card Background</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteCardBackgroundColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteCardBackgroundColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Card Font Color</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteCardFontColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteCardFontColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Card Discount Color</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDiscountColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDiscountColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Card Price Color</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websitePriceColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websitePriceColor: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="col">
              <p>Card Heart Tag Color</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteHeartTagColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteHeartTagColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Card Discount Tag Color</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteDiscountTagColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteDiscountTagColor: e.target.value,
                    });
                  }}
                />
              </div>
              <p>Card Button</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteButton}
                  onChange={(e) => {
                    setWebsite({ ...website, websiteButton: e.target.value });
                  }}
                />
              </div>
              <p>Card Button Fonte</p>
              <div class="input-group mb-3" id="header-color">
                <input
                  type="color"
                  class="form-control"
                  value={website.websiteButtonColor}
                  onChange={(e) => {
                    setWebsite({
                      ...website,
                      websiteButtonColor: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <br />
            <button
              className="btn btn-success"
              onClick={() => {
                Api.patch(
                  "https://tamarintec.herokuapp.com/website-card-style",
                  {
                    empresa: empresa._id,
                    websiteCardBackgroundColor:
                      website.websiteCardBackgroundColor,
                    websiteCardFontColor: website.websiteCardFontColor,
                    websiteDiscountColor: website.websiteDiscountColor,
                    websitePriceColor: website.websitePriceColor,
                    websiteHeartTagColor: website.websiteHeartTagColor,
                    websiteDiscountTagColor: website.websiteDiscountTagColor,
                    websiteButton: website.websiteButton,
                    websiteButtonColor: website.websiteButtonColor,
                  }
                );
              }}
            >
              Alterar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteCards;
