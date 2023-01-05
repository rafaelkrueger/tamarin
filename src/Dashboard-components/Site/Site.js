import React, { useState } from "react";
import UndefinedImage from "../../Images/undefined.jpg";
import SiteCards from "./SiteCards";
import SiteDetails from "./SiteDetails";
import Api from "../../Api";
import "./Site.css";

function Site({ empresa }) {
  const [website, setWebsite] = useState({
    websiteNavbarFooterColor:
      empresa != null ? empresa.website.websiteNavbarFooterColor : "",
    websiteFontFooterColor:
      empresa != null ? empresa.website.websiteFontFooterColor : "",
    websiteColor: empresa != null ? empresa.website.websiteColor : "",
    websiteFontColor: empresa != null ? empresa.website.websiteFontColor : "",
    websiteCarousel: empresa != null ? empresa.website.websiteCarousel : "",
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
    <div className="site">
      <h1>Informações do Site</h1>
      <div className="site-carousel" style={{ width: "90%" }}>
        <div className="row" id="home-website">
          <div className="col" id="home-carousel-column">
            <h3 id="home-carousel-title">Imagem Carousel</h3>
            <div class="input-group mb-3" id="header-color">
              <input
                name="testImage"
                onChange={async (e) => {
                  const fileReader = new FileReader();
                  const file = e.target.files[0];
                  const base64 = await convertBase64(file);
                  setWebsite({ ...website, websiteCarousel: base64 });
                }}
                type="file"
                class="form-control"
                id="home-carousel-input"
              />
              <div class="input-group-prepend">
                <button
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-style",
                      {
                        empresa: empresa._id,
                        websiteNavbarFooterColor:
                          website.websiteNavbarFooterColor,
                        websiteFontFooterColor: website.websiteFontFooterColor,
                        websiteColor: website.websiteColor,
                        websiteFontColor: website.websiteFontColor,
                        websiteCarousel: website.websiteCarousel,
                      }
                    );
                  }}
                  className="btn btn-large btn-primary"
                >
                  ALTERAR
                </button>
              </div>
            </div>
            <img
              src={
                website.websiteCarousel == ""
                  ? UndefinedImage
                  : website.websiteCarousel
              }
              className="image-second-column"
            />
          </div>
          <div className="col" id="home-carousel-column-2">
            <h4 className="website-colors-title">Cor Navbar/Footer</h4>
            <div class="input-group mb-3" id="header-color">
              <input
                type="color"
                class="form-control"
                value={website.websiteNavbarFooterColor}
                onChange={(e) => {
                  setWebsite({
                    ...website,
                    websiteNavbarFooterColor: e.target.value,
                  });
                }}
              />
              <div class="input-group-prepend">
                <button
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-style",
                      {
                        empresa: empresa._id,
                        websiteNavbarFooterColor:
                          website.websiteNavbarFooterColor,
                        websiteFontFooterColor: website.websiteFontFooterColor,
                        websiteColor: website.websiteColor,
                        websiteFontColor: website.websiteFontColor,
                        websiteCarousel: website.websiteCarousel,
                      }
                    );
                  }}
                  className="btn btn-large btn-success"
                >
                  ALTERAR
                </button>
              </div>
            </div>
            <h4 className="website-colors-title">
              Cor Fonte do(a) Navbar/Footer
            </h4>
            <div class="input-group mb-3" id="header-color">
              <input
                type="color"
                class="form-control"
                value={website.websiteFontFooterColor}
                onChange={(e) => {
                  setWebsite({
                    ...website,
                    websiteFontFooterColor: e.target.value,
                  });
                }}
              />
              <div class="input-group-prepend">
                <button
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-style",
                      {
                        empresa: empresa._id,
                        websiteNavbarFooterColor:
                          website.websiteNavbarFooterColor,
                        websiteFontFooterColor: website.websiteFontFooterColor,
                        websiteColor: website.websiteColor,
                        websiteFontColor: website.websiteFontColor,
                        websiteCarousel: website.websiteCarousel,
                      }
                    );
                  }}
                  className="btn btn-large btn-success"
                >
                  ALTERAR
                </button>
              </div>
            </div>
            <h4 className="website-colors-title">Cor Site</h4>
            <div class="input-group mb-3" id="header-color">
              <input
                type="color"
                class="form-control"
                value={website.websiteColor}
                onChange={(e) => {
                  setWebsite({
                    ...website,
                    websiteColor: e.target.value,
                  });
                }}
              />
              <div class="input-group-prepend">
                <button
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-style",
                      {
                        empresa: empresa._id,
                        websiteNavbarFooterColor:
                          website.websiteNavbarFooterColor,
                        websiteFontFooterColor: website.websiteFontFooterColor,
                        websiteColor: website.websiteColor,
                        websiteFontColor: website.websiteFontColor,
                        websiteCarousel: website.websiteCarousel,
                      }
                    );
                  }}
                  className="btn btn-large btn-success"
                >
                  ALTERAR
                </button>
              </div>
            </div>
            <h4 className="website-colors-title">Cor Fonte do Site</h4>
            <div class="input-group mb-3" id="header-color">
              <input
                type="color"
                class="form-control"
                value={website.websiteFontColor}
                onChange={(e) => {
                  setWebsite({
                    ...website,
                    websiteFontColor: e.target.value,
                  });
                }}
              />
              <div class="input-group-prepend">
                <button
                  onClick={() => {
                    Api.patch(
                      "https://tamarintec.herokuapp.com/website-style",
                      {
                        empresa: empresa._id,
                        websiteNavbarFooterColor:
                          website.websiteNavbarFooterColor,
                        websiteFontFooterColor: website.websiteFontFooterColor,
                        websiteColor: website.websiteColor,
                        websiteFontColor: website.websiteFontColor,
                        websiteCarousel: website.websiteCarousel,
                      }
                    );
                  }}
                  className="btn btn-large btn-success"
                >
                  ALTERAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteCards empresa={empresa} />
      <SiteDetails empresa={empresa} />
    </div>
  );
}

export default Site;
